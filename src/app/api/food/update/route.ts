import { NextRequest, NextResponse } from "next/server";

import { SearchParams } from "next/dist/server/request/search-params";
import { uploadImageToCloudinary } from "../../../../../lib/utils/uploadImage";
import {
  createFood,
  getAllFoods,
} from "../../../../../lib/services/food-service";
import { updateFood } from "../../../../../lib/services/update-service";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  // Extract food fields from formData
  const name = formData.get("name") as string;
  const ingredients = formData.get("ingredients") as string;
  const price = formData.get("price") as string;
  const categoryId = formData.get("categoryId") as string;
  const image = formData.get("image") as File; //File undefined
  let imageUrl = formData.get("imageUrl") as string;
  const id = formData.get("id") as string;

  if (image) {
    imageUrl = await uploadImageToCloudinary(image);
  }

  const result = await updateFood(
    name,
    ingredients,
    Number(price),
    categoryId,
    imageUrl,
    id
  );

  if (result) {
    return NextResponse.json(
      { message: "Food item received successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Food Failed to create" },
      { status: 400 }
    );
  }
}

export const GET = async (searchParams: SearchParams) => {
  const foods = await getAllFoods();

  return NextResponse.json({ foods }, { status: 200 });
};
export const FETCH = async () => {
  const foods = await getAllFoods();

  return NextResponse.json({ foods }, { status: 200 });
};
