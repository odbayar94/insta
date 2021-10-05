import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import {IError, IResponse} from "../interfaces";
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
          id: post,
        }}

    }else{
      throw new MyError({...errorObj, message: "Утга дутуу байна", messageCode: "POST400" });
    }
    
      res.status(200).json(response);
});