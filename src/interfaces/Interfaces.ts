import {ObjectId } from 'mongoose';
import {IPost, IPosts} from './Posts';
import { Request, Response, NextFunction } from "express";

export interface IUserCreate{
    email: string;
    password: string;
    username: string;
}

export interface IRequest extends Request{
    userId?: ObjectId
}


export interface IResponse {
    success: boolean;
    statusCode: number;
    message: string;
    messageCode: string; 
    user?: IUser;
    post?: IPost;
    posts?: IPosts;
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
