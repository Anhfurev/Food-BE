import { NextRequest, NextResponse } from "next/server";
import {
  createCategory,
  getAllCategories,
} from "../../../../lib/services/category-service";

export async function GET() {
  const categories = await getAllCategories();
  return new NextResponse(JSON.stringify({ data: categories }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await createCategory(body.categoryInput);
  return new NextResponse(JSON.stringify({ message: "Category created" }), {
    status: 200,
  });
}
