import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import {
  userRoute
} from "./routes/useroutes.js";
import {
  chatRoute
} from "./routes/chatroutes.js";
import { messageRoute } from "./routes/messageroutes.js";
dotenv.config();
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));

app.get('/', (req,res) => {
    res.json('welcome to chat api');
  });

app.use('/api/users',userRoute);
app.use('/api/chats',chatRoute);
app.use('/api/messages',messageRoute);
mongoose.connect(process.env.MONGO_URL).then((res) => {
    console.log("Database connected");
  }).catch (error => console.log(error));;

const port = process.env.PORT || 4000

app.listen(port, (req,res) => {
    console.log(`server running on port : ${port} `);
  });




