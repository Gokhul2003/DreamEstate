import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcyrptjs from "bcryptjs";
export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcyrptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created sucessfully");
  } catch (error) {
    next(error);
  }

}
