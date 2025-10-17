import mongoose, { Schema, model, models } from "mongoose";
import { FoodType } from "../utils/types";

const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: { type: Schema.ObjectId, ref: "Category", required: true },
    ingredients: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Food = models.Food || model("Food", FoodSchema);
export default Food;
