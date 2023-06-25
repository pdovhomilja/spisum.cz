import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const prompts = await prisma.prompts.findMany({
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
