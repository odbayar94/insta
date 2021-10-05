import config from '../config';
import MyError from "../utils/MyError";
import Post from "../models/Post";
import {IPostModel} from "../interfaces"

export const createPost  = async function(postedBy: string, caption:string, imgUrl: string){
   
    const user = await Post.create({postedBy,caption,imgUrl });
    
    const response = user ?  true :  false;
    
    return response;

}
