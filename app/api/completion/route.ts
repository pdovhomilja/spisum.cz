import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

// Set the runtime to edge for best performance
//export const runtime = "edge";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  //const { messages }: { messages: string } = await req.json();
  const { prompt }: { prompt: string } = await req.json();

  const newPromptHistoryItem = await prisma.promptsHistory.create({
    data: {
      prompt: prompt,
      user_ip: req.headers.get("x-forwarded-for"),
      user_browser: req.headers.get("user-agent"),
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
    prompt: prompt,
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

  return result.toDataStreamResponse();
}
