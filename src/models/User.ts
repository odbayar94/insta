import bcrypt from "bcrypt";
import crypto from "crypto";
import validator from 'validator';
import jwt from "jsonwebtoken";
import mongoose, { Schema, model, Model, Document, ObjectId } from 'mongoose';

import {IUserModel} from '../interfaces'


const customValidateEmail = function(email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: [customValidateEmail, 'invalid email'],
    },
    password: {
      type: String,
      minlength: 8,
    },
    createdAt: { type: Number, default: Date.now },
    lastLogin: { type: Number },
});

UserSchema.pre('save', function(next){
  const saltRounds = 10;

  if(this.modifiedPaths().includes('password')){
    bcrypt.genSalt(saltRounds, (err,salt)=>{
      if(err) return next(err);
      bcrypt.hash(this.password, salt, (err,hash)=>{
        if(err) return next(err);
        this.password = hash;
        next();
      })
    })
  }else{
    next();
  }
});

const User: Model<IUserModel> = model('User', UserSchema)
export default User
