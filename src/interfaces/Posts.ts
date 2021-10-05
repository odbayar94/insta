import { ObjectId } from 'mongoose';

export interface IPostModel extends Document{
    postedBy: ObjectId;
    caption: String;
    imgUrl: string;
    createdAt?: number;
}