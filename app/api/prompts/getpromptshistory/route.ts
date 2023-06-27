import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest) {
  try {
    const prompts = await prisma.promptsHistory.findMany({
      orderBy: {
        date_created: "desc",
      },
    });

    return NextResponse.json({ prompts });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
