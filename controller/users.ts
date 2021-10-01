import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

const MyError = require("../utils/myError");

import User from "../models/User";


export const login = async (req: Request,res: Response, next: NextFunction) => {
    //
    const {username, password} = req.body;
    if(!username || !password){
        throw new MyError("Имэйл болон нууц үгээ оруулна уу", 400);
    }
    try {
        const user = await User.findOne({username});
        if (!user) {
            throw new MyError("Имэйл болон нууц үгээ зөв оруулна уу", 401);
          }

          let passwordValid = await user.matchPassword(password);
         
          if(!passwordValid){
            throw new MyError("Имэйл болон нууц үгээ зөв оруулна уу", 401);
          }

          const token = user.getJsonWebToken();
          
          res.status(200).json({
            success: true,
            userId: user._id,
            token,
          });
    } catch (error) {
        res.status(500).send(error)
    }
}
export const registerUser = async (req: Request,res: Response, next: NextFunction) => {
    try {
        const {username, password, email} = req.body;
        const user = await User.create({username, password, email})
        res.status(200).json({
            success: true,
            user: user,
          });
    } catch (error) {
        res.status(500).send(error)
    }
}
