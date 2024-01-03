import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";


dotenv.config();
mongoose.connect(process.env.MONGO_URL).then((res) => {
    console.log("Database connected");
  }).catch (error => console.log(error));;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));


app.get('/test', (req,res) => {
    res.json('test ok');
  });

const server = app.listen(4040); 