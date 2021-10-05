import config from '../config';
import MyError from "../utils/MyError";
import Post from "../models/Post";
import {IPostModel} from "../interfaces";
import { ObjectId } from 'mongoose';

export const createPost  = async function(postedBy: string, caption:string, imgUrl: string){
   try{
    const user = await Post.create({postedBy,caption,imgUrl }); 
    return user._id;
   }catch(error){
    throw new Error();
   }
}

export const getPosts = async function(userId: ObjectId){
    try{
        const post = await Post.find({postedBy: userId}); 
        return post;

       }catch(error){
        throw new Error();
       }

}
