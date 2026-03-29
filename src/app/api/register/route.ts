import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "../../libs/prismaDB";

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new NextResponse("Invalid email format", { status: 400 });
  }

  if (password.length < 8) {
    return new NextResponse("Password must be at least 8 characters", {
      status: 400,
    });
  }

  try {
    const exist = await prisma.user.findUnique({
      where: { email },
    });

    if (exist) {
      // Generic message to prevent email enumeration
      return NextResponse.json(
        { message: "If this email is available, your account has been created." },
        { status: 200 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    } as any);

    return NextResponse.json(
      { message: "If this email is available, your account has been created." },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
