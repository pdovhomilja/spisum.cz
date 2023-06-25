import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  const { id } = await req.json();
  console.log(id, "id");
  try {
    const findActive = await prisma.prompts.findMany({
      where: {
        status: "ACTIVE",
      },
    });

    if (findActive.length > 0) {
      await prisma.prompts.update({
        where: {
          id: findActive[0].id,
        },
        data: {
          status: "INACTIVE",
        },
      });
    }

    const setActive = await prisma.prompts.update({
      where: {
        id: id,
      },
      data: {
        status: "ACTIVE",
      },
    });

    return NextResponse.json(setActive);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
