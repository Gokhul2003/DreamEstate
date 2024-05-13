import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcyrptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcyrptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created sucessfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcyrptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    //this id is created in mongodb which is unique
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // console.log(validUser)
    //separting password  and rest data
    const { password: pass, ...rest } = validUser._doc;

    //saving the token in cookie
    res
      .cookie("access_token", token, { httpOnly: true },) //no third pary can acess this coookie
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};


//   const { email, password } = req.body;
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, 'User not found!'));
//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: pass, ...rest } = validUser._doc;
//     res
//       .cookie('access_token', token, { httpOnly: true })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };