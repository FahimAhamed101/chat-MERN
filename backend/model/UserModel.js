import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserShema = new Schema(
  {
    name: {type: String,required: true,minlength:3},
    email: {type: String,required: true,required: true,minlength:3,maxlength:200,unique:true},
    password: {type: String,required: true,minlength:3,maxlength:1024},
   

   

  },
  {
    timestamps: true,
  }
);

//compile the schema to model
const userModel = mongoose.model("User", UserShema);

export default userModel;