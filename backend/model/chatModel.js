import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chatShema = new Schema(
  {
    members: Array,
    
   

  },
  {
    timestamps: true,
  }
);

//compile the schema to model
const chatModel = mongoose.model("Chat", chatShema);

export default chatModel;