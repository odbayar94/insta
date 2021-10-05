import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { ObjectId } from "mongodb";
import {IPostModel} from '../interfaces';

const PostSchema = new Schema({

    postedBy: { type: ObjectId, ref: 'users' },
    caption: { type: String, required: false },
    imgUrl: { type: String, required: true },
    createdAt: { type: Number, default: Date.now },
})

const Post: Model<IPostModel> = model('Post', PostSchema)
export default Post