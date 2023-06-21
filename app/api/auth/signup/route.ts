import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, city, password } =
    await request.json();

  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 2,
        max: 20,
      }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "Last name is invalid",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid",
    },
    {
      valid: validator.isLength(city, {
        min: 2,
      }),
      errorMessage: "City is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not strong enough",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) errors.push(check.errorMessage);
  });

  if (errors.length)
    return NextResponse.json({ error: errors[0] }, { status: 400 });

  const userWithEmail = await prisma.user.findUnique({ where: { email } });

  if (userWithEmail)
    return NextResponse.json(
      { error: "Email is already in use" },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      city,
      email,
      password: hashedPassword,
      phone,
    },
  });

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
      status: 201,
      headers: {
        "Set-Cookie": `jwt=${token}; Max-Age=${ONE_DAY}; Path=/`,
      },
    }
  );
}
