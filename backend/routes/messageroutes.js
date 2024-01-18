import express from "express";
import {
    createChat,findUserChat,findChat
    
  
  } from "../controller/messageController.js";
  
  
export const messageRoute = express.Router();
  
  Route.post("/", createChat);
  Route.post("/login", findUserChat);
  Route.post("/find/:firstId/:secondId", findChat);