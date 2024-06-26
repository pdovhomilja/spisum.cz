import { streamText, StreamingTextResponse, type CoreMessage } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

// Set the runtime to edge for best performance
//export const runtime = "edge";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  //console.log(messages, "messages");
  console.log("Aktual prompt: ", messages[messages.length - 1].content);

  let lastMessageContent = messages[messages.length - 1].content;

  if (typeof lastMessageContent !== "string") {
    // handle the case when content is not a string
    // you might want to convert it to a string or assign a default string value
    lastMessageContent = "";
  }

  //  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
  //console.log(ip, "ip");

  // Create an empty object to store headers
  const headers: { [key: string]: string } = {};

  // Iterate over each header and add it to the headers object
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const newPromptHistoryItem = await prisma.promptsHistory.create({
    data: {
      prompt: lastMessageContent,
      user_ip: headers["x-forwarded-for"],
      user_browser: headers["user-agent"],
    },
  });

  const template = await prisma.prompts.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  const templateUseCount = await prisma.prompts.findMany({
    where: {
      id: template[0].id,
    },
  });

  await prisma.prompts.update({
    where: {
      id: template[0].id,
    },
    data: {
      use_count: templateUseCount[0].use_count + 1,
    },
  });

  const result = await streamText({
    model: openai("gpt-4o"),
    system: template[0].prompt,
    messages: messages,
    onFinish: async ({ text }) => {
      //Upate prisma history
      await prisma.promptsHistory.update({
        where: {
          id: newPromptHistoryItem.id,
        },
        data: {
          response: text,
        },
      });
    },
  });

  return new StreamingTextResponse(result.toAIStream());
}
