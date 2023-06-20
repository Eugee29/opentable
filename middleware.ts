import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const bearerToken = request.headers.get("authorization");
  if (!bearerToken)
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );

  const token = bearerToken.split(" ")[1];

  if (!token)
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );
  }

  const payload = jose.decodeJwt(token) as { id: string };

  if (!payload.id)
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 }
    );

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/auth/me"],
};
