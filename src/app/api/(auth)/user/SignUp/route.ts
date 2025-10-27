import connectDB from "../../../../../../lib/mongodb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "../../../../../../lib/models/user";

export async function POST(req: Request) {
  await connectDB();
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({
    email: email,
    password: hashPassword,
    role: "USER",
  });
  if (user) {
    return NextResponse.json(
      { message: "Successfully user created" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "User Failed to create" },
      { status: 400 }
    );
  }
}
