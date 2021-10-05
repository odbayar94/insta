import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import {IError} from "../interfaces";
import MyError from "../utils/MyError";
import Post from "../models/Post";
const UserService = require('../services/user');

var errorObj: IError = {
    message: "",
    messageCode: "LOGIN400",
    statusCode: 401
  }

  export const getPosts = asyncHandler(async (req: Request,res: Response, next: NextFunction) => {
    //request handler, validation
    //   const {username, password} = req.body;
     
      res.status(200).json({status: true});
});