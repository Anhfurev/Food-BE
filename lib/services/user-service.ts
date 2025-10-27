import Food from "../models/food";
import User from "../models/user";
import connectDB from "../mongodb";
import { FoodType } from "../utils/types";
import bcrypt from "bcrypt";

export const createUser = async (email: string, password: string) => {
  await connectDB();
  const newUser = new User({ email, password });
  await newUser.save();
  return newUser;
};
export const loginUser = async (email: string, password: string) => {
  await connectDB();
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  }
  const checkPass = bcrypt.compare(password, user.password);
  if (!checkPass) return false;
  return user;
};
