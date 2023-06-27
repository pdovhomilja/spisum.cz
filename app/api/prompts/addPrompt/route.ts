import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prismadb";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const newprompt = await prisma.prompts.create({
      data: {
        prompt: prompt,
      },
    });
    console.log(newprompt, "newprompt");
    const path = "/admin";
    revalidatePath(path);
    return NextResponse.json({ newprompt }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null);

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}
