import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isLength(password, { min: 1 }),
      errorMessage: "Password is invalid",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) errors.push(check.errorMessage);
  });

  if (errors.length)
    return NextResponse.json({ error: errors[0] }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user)
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({
    id: user.id,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secret);

  const ONE_DAY = 60 * 60 * 24;

  return NextResponse.json(
    {
      firsName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      city: user.city,
    },
    {
      headers: {
        "Set-Cookie": `jwt=${token}; Max-Age=${ONE_DAY}; Path=/`,
      },
    }
  );
}
