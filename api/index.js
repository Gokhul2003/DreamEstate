import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{

    console.log("connected to MONGODB")
}).catch((error)=>{
    console.log(error)
})

const app=express();

let port=3000
app.listen(3000,()=>{

    console.log(`service runnning on ${port}`)
})