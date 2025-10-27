import Food from "../models/food";
import connectDB from "../mongodb";
import { FoodType } from "../utils/types";

export const updateFood = async (
  name: string, // tsuavan, havirgatai tsuivan
  ingredients: string, //
  price: number, //20000 25000
  categoryId: string, //main dish
  imageUrl: string,
  id: string
) => {
  await connectDB();
  const newFood = await Food.findByIdAndUpdate(id, {
    name,
    ingredients,
    price,
    categoryId,
    imageUrl,
  });
  return true;
};
