"use server";

export async function deletePrompt(id: any) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deleteprompt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
}
