import prisma from "@/prisma/client";
import * as jose from "jose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const bearerToken = request.headers.get("authorization") as string;
  const token = bearerToken.split(" ")[1];
  const payload = jose.decodeJwt(token) as { id: string };

  const user = await prisma.user.findUnique({
    where: { id: payload.id },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  return NextResponse.json({ user });
}
