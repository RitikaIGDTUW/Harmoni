import mongoose from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req,res)=>{
    try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;    

        
        // Check for existing conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // Create a new conversation if it doesn't exist
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        conversation.messages.push(newMessage._id);
        await conversation.save();
        
        //socket io functionality
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("eror in sendmsg controller",error.message)
        res.status(500).json({error:"internal server error"})
    }
};

export const getMessages=async(req,res)=>{
    try{
        const {id:userToChatId} = req.params;
        const senderId=req.user._id;
        const conversation= await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages"); //not refernce but actual messages

        if(!conversation) return res.status(200).json([]);

        const messages= conversation.messages || [];

        res.status(200).json(messages)
    }
    catch(error){
        console.log("eror in getmsg controller",error.message)
        res.status(500).json({error:"internal server error"})
    }
}