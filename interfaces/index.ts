import {ObjectId } from 'mongoose';

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