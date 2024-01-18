import messageModel from "../model/messageModel.js";




export const createMessage = async (req,res)=>{
    const {chatId,senderId,text}=req.body
    const message = await messageModel({
       chatId,senderId,text
    });
    try{
        
        const response = await message.$allsave();
        res.status(200).json(response);
    }
     catch(error){
        console.log(error)
        res.status(500).json(error)
     }
}



export const getMessage = async (req,res)=>{
    const {chatId}=req.params;
   
    try{
         const message = await messageModel.find({
       chatId
    });
        
        res.status(200).json(message);
    }
     catch(error){
        console.log(error)
        res.status(500).json(error)
     }
}


export const findUserChats = async (req,res)=>{
    const userId=req.params.userId;

    try{
        const chats = await chatModel.find({
            members:{$all:[userId]},
        });
       
        res.status(200).json(chats);
    }
     catch(error){
        console.log(error)
        res.status(500).json(error)
     }
}