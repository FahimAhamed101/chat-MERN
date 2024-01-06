import express from "express";
import {
    registerUser,loginUser
    
  
  } from "../controller/userController.js";
  
  
export const userRoute = express.Router();
  
  userRoute.post("api/register", registerUser);
  userRoute.post("/login", loginUser);



userRoute.get("/register",(req,res)=>{
    res.send('register')
});


