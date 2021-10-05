import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import {IError, IResponse, IRequest} from "../interfaces";
import MyError from "../utils/MyError";
import Post from "../models/Post";

import * as service from "../services"

var response: IResponse = {
  success: false,
  statusCode: 401,
  messageCode: "error", 
  message: "Service doesn't work",
};

var errorObj: IError = {
    message: "",
    messageCode: "POST400",
    statusCode: 400
  }

  export const createNew = asyncHandler(async (req: Request,res: Response, next: NextFunction) => {
    const {postedBy, caption, imgUrl} = req.body;

    if(postedBy && caption && imgUrl){
      const post = await service.createPost(postedBy, caption, imgUrl);
      if(!post){
        throw new MyError({...errorObj, message: "Пост оруулахад алдаа гарлаа", messageCode: "POST401"});
      }
      response = {
        success: true,
        statusCode: 200,
        messageCode: "POST200", 
        message: "Таны бичсэн пост амжилттай орлоо",
        post:{
          _id: post,
        }}

    }else{
      throw new MyError({...errorObj, message: "Утга дутуу байна", messageCode: "POST400" });
    }
    
      res.status(200).json(response);
});

export const getPosts = asyncHandler(async (req: IRequest,res: Response, next: NextFunction) => {
const userId: any = req.userId;

    const token = true;
    if(!token){
      throw new MyError({...errorObj, message: "Утга дутуу байна", messageCode: "POST400" });
    }
      const post = await service.getPosts(userId);
      
      if(post.length == 0){
        throw new MyError({...errorObj, message: "Хэрэглэгчид харгалзах пост байхгүй", messageCode: "POST402"});
      }
     
      
      // response = {
      //   success: true,
      //   statusCode: 200,
      //   messageCode: "POST201", 
      //   message: "Амжилттай",
      //   posts: post
      //   // posts:{
      //   //   post
      //   // }
      // }

    
      res.status(200).json(post);
});