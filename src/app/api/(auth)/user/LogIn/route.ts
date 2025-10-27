import { NextRequest, NextResponse } from "next/server";
import { getAllFoods } from "../../../../../../lib/services/food-service";
import { loginUser } from "../../../../../../lib/services/user-service";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  const { email, password } = body;
  const result = await loginUser(email, password);
  if (result) {
    return NextResponse.json({
      data: result,
      success: true,
      message: "Login Successful",
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "Login Failed",
    });
  }
}

export const GET = async () => {
  const foods = await getAllFoods();
  return NextResponse.json({ data: foods }, { status: 200 });
};
