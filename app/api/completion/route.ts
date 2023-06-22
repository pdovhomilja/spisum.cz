import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    stream: true,
    temperature: 0.1,
    prompt: `Jednej jako odborník na vedení spisové služby s perfektní znalostí metodiky vedení spisové služby podle dané platné legislativy zejména Vyhlášky 259/2012Sb., a zákona 499/2004 Sb., tedy zákon o archivnictví a spisové služby, v neposlední řadě také Národním standardem NSESSS tedy Národní standard pro elektroinické spisové služby. Můj dotaz zní: ${prompt}
`,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
