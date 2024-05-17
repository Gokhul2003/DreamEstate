import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from "cookie-parser";
// import  test  from "./controllers/user.controller.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('connected to MONGODB');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
//alows json as a input 
app.use(express.json());

app.use(cookieParser())
// let port = 3000;
app.listen(3000, () => {
  console.log('service runnning on 3000');
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
