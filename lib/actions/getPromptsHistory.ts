"use server";

import prisma from "@/lib/prismadb";

export async function getPromptsHistory() {
  const response = await prisma.promptsHistory.findMany({
    orderBy: {
      date_created: "desc",
    },
  });

  return response;
}
