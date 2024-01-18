import express from "express";
import {
    registerUser,loginUser
    
  
  } from "../controller/userController.js";
  
  
export const userRoute = express.Router();
  
  userRoute.post("/register", registerUser);
  userRoute.post("/login", loginUser);






