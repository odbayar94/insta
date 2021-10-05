import { ObjectId } from 'mongoose';

export interface IPostModel extends Document{
    postedBy: ObjectId;
    caption: String;
    imgUrl: string;
    createdAt?: number;
}
export interface IPost {
    _id?: ObjectId,
    postedBy?: ObjectId,
    caption?: string,
    imgUrl?: string,
    createdAt?: number,
}

// export type IPosts =  {
//     [index: number]: { 
//         _id?: ObjectId,
//         postedBy?: ObjectId,
//         caption?: string,
//         imgUrl?: string,
//         createdAt?: number, };
// }

export interface IPosts {
    
        _id?: ObjectId;
        postedBy?: ObjectId;
        caption?: string;
        imgUrl?: string;
        createdAt?: number;
}