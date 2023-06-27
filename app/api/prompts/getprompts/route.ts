import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  try {
    const prompts = await prisma.prompts.findMany({
      orderBy: {
        date_created: "desc",
      },
    });
    const path = req.nextUrl.searchParams.get("path") || "/admin";
    console.log(path, "path");
    revalidatePath(path);
    return NextResponse.json({ prompts }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
