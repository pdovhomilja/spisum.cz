import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  const { id } = await req.json();
  console.log(id, "id");
  try {
    const deletePrompt = await prisma.prompts.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ deletePrompt });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
