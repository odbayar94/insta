import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import MyError from "../utils/MyError";
import User from "../models/User";

import {IUserCreate, IResponse, ILogin, IError} from "../interfaces"

async function matchPassword(enteredPassword: string, userPassword: string) {
    let isValid = await bcrypt.compare(enteredPassword, userPassword);
    return isValid;
  };
async function getJsonWebToken(id: string){
    const token = jwt.sign(
        { id },
        `INSTAGRAM23134842DJ`,
        {
          expiresIn: process.env.JWT_EXPIRESIN,
        }
      );
    
      return token;
}

var response: IResponse = {
  success: false,
  statusCode: 401,
  messageCode: "error", 
  message: "Service doesn't work"
};
var errorObj: IError = {
  message: "",
  messageCode: "",
  statusCode: 401
}

export async function getUsers({username, password}: ILogin) {

    try {
        const user = await User.findOne({username});
        
        if(!user){
          errorObj = {...errorObj, message: "Нэр нууц үг буруу байна",  messageCode: "LOGIN402"};
          throw new Error();
        }
        const passwordValid = await matchPassword(password, user.password);
        
            if(!passwordValid){
              errorObj = {...errorObj, message: "Нэр нууц үг буруу байна",  messageCode: "LOGIN402"};
              throw new Error();
            }
            const token = await getJsonWebToken(user._id);
            response = {
              success: true,
              statusCode: 200,
              messageCode: "LOGIN200", 
              message: "Системд амжилттай нэвтэрлээ",
              user:{
                id: user._id,
                token
              }}
        
        return response;

    } catch (error) {
        throw new MyError(errorObj);
    }
}

export  async function registerUser({username, password, email}: IUserCreate){
  try{
    const user = await User.create({username, password, email});
    if(!user){
      throw new Error();
    }
    return response;
  }catch(error){
    throw new MyError(errorObj);
  }
 
}