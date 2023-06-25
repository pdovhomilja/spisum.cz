import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import prisma from "@/lib/prismadb";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
//export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const template = await prisma.prompts.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    stream: true,
    temperature: 0,
    max_tokens: 2000,
    prompt: template[0].prompt + prompt,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
