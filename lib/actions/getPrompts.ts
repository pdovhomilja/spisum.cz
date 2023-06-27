"use server";

export async function getPrompts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prompts/getprompts`,
    {
      cache: "no-store",
    }
  );
  const prompts = await response.json();
  return prompts;
}
