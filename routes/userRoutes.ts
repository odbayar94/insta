import express from "express";
import userModel from '../models/User'
import * as users from "../controller/users"

const userRouter = express.Router();

userRouter.post("/register", users.registerUser);
userRouter.post("/login", users.login);

export default userRouter;