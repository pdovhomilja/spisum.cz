"use server";

export async function activatePrompt(id: any) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prompts/setActive`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
}
