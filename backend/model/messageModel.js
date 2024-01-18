import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageShema = new Schema(
  {
    chatId:String,
    senderid:String,
    text:String,
    
   

  },
  {
    timestamps: true,
  }
);

//compile the schema to model
const messageModel = mongoose.model("Message", messageShema);

export default messageModel;