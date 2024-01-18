import userModel from "../model/UserModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt  from "jsonwebtoken";

export const createToken=(_id)=>{
  const jwtkey = process.env.Jwt_SECRET_KEY;
  return jwt.sign({_id},jwtkey,{expiresIn:"3d"});
};


export const registerUser = asyncHandler(async (req, res) => {

  try{
     const { name, email, password } = req.body;
  //Check user exists
  let user = await  userModel.findOne({ email });
  if (user)  return res.status(400).json("User with given mail already exists...");
  if (!email || !name || !password)
  return res.status(400).json("all fields are required...");
  if (!validator.isEmail(email))  
  return res.status(400).json("email must be valid email...");
  if (!validator.isStrongPassword(password))  
  return res.status(400).json("password must be strong...");

  user  = new userModel({ name, email, password });
  //hash password
  
  
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  //create the user
  await user.save();
  const token = createToken(user._id)

  res.status(200).json({
    _id:user._id,name,email,token
  });
  }
  catch (error){
    console.log(error);
    res.status(500).json(error)
  }
 

});

export const loginUser = asyncHandler(async (req, res) => {

  try{
     const {email, password } = req.body;
  //Check user exists
  const user = await  userModel.findOne({ email });
  if (!user)  return res.status(400).json("invalid email or password...");


  
  
  const isValidPassword = await bcrypt.compare(password,user.password);
  if (!isValidPassword)  return res.status(400).json("invalid email or password...");
  //create the user
  
  const token = createToken(user._id)

  res.status(201).json({
    _id:user._id,name:user.name,email,token
  });
  }
  catch (error){
    console.log(error);
    res.status(500).json(error)
  }
 

});

export const findUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  try{
    const user = await  userModel.findById({ userId });
    res.status(200).json(user);
  }

  catch (error){
    console.log(error);
    res.status(500).json(error)
  }
});

export const getUsers = asyncHandler(async (req, res) => {

  try{
    const users = await  userModel.find();
    res.status(200).json(users);
  }

  catch (error){
    console.log(error);
    res.status(500).json(error)
  }
});