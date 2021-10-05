import mongoose, { Schema, model, Model, Document, ObjectId } from 'mongoose';
import {IPost} from '../interfaces';

const PostSchema = new Schema({
    postedBy: { type: ObjectId, ref: 'users' },
    caption: { type: String, required: false },
    photoPath: { type: String, required: true },
    createdAt: { type: Number, default: Date.now },
})

const Post: Model<IPost> = model('Post', PostSchema)
export default Post