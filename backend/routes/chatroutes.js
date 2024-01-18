import express from "express";
import {
    createChat,findUserChats,findChat
    
  
  } from "../controller/chatController.js";
  
  
export const chatRoute = express.Router();
  
chatRoute.post("/", createChat);
chatRoute.post("/login", findUserChats);
chatRoute.post("/find/:firstId/:secondId", findChat);