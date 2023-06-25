import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  try {
    const newprompt = await prisma.prompts.create({
      data: {
        prompt: prompt,
      },
    });
    return NextResponse.json(newprompt);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
