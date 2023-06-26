"use server";

export async function addPrompt(prompt: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prompts/addPrompt`, {
    method: "POST",
    body: JSON.stringify({
      prompt: prompt,
    }),
  });
}
