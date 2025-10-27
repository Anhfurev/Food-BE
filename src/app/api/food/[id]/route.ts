import { NextRequest, NextResponse } from "next/server";

import { uploadImageToCloudinary } from "../../../../../lib/utils/uploadImage";
import { getAllFoods } from "../../../../../lib/services/food-service";

export async function FETCH(request: NextRequest) {
  const formData = await request.formData();

  // Extract food fields from formData
  const name = formData.get("name") as string;
  const ingredients = formData.get("ingredients") as string;
  const price = formData.get("price") as string;
  const categoryId = formData.get("categoryId") as string;
  const image = formData.get("image") as File;
  const { searchParams } = new URL(request.url);
  const foods = await getAllFoods();
  const id = searchParams.get("id");
  const uploadedUrl = await uploadImageToCloudinary(image);
}
