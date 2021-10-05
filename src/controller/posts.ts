import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import {IError} from "../interfaces";
import MyError from "../utils/MyError";
import Post from "../models/Post";
// const UserService = require('../services/user');
import {createPost} from '../services';


var errorObj: IError = {
    message: "",
    messageCode: "POST400",
    statusCode: 400
  }

  export const getPosts = asyncHandler(async (req: Request,res: Response, next: NextFunction) => {
    const {postedBy, caption, imgUrl} = req.body;

    if(postedBy && caption && imgUrl){
      const post = await createPost(postedBy, caption, imgUrl);
      if(!post){
        throw new MyError({...errorObj, message: "Пост оруулахад алдаа гарлаа", messageCode: "POST401"});
      }
    }else{
      throw new MyError({...errorObj, message: "Утга дутуу байна", messageCode: "POST400" });
    }
    
     
      res.status(200).json({status: true});
});