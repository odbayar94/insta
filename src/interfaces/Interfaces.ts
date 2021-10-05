import {ObjectId } from 'mongoose';
import {IPost} from './Posts';

export interface IUserCreate{
    email: string;
    password: string;
    username: string;
}


export interface IResponse {
    success: boolean;
    statusCode: number;
    message: string;
    messageCode: string; 
    user?: IUser;
    post?: IPost;
}

export interface IUser{
  id: ObjectId;
  token: string;
}



export interface ILogin{
    password: string;
    username: string;
}

export interface IError{
    message: string;
    messageCode: string;
    statusCode: number;
}

export interface IUserModel extends Document{
    username: string;
    email: string;
    password: string;
    createdAt: number;
    lastLogin: number;
  }