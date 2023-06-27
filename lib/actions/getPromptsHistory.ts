"use server";

export async function getPromptsHistory() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prompts/getpromptshistory`,
    {
      cache: "no-store",
    }
  );
  const prompts = await response.json();
  return prompts;
}
