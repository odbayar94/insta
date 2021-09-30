import express from "express";
import userModel from '../models/users'
import * as users from "../controller/users"

const userRouter = express.Router();
userRouter.get("/", users.getUsers);
userRouter.post("/", users.createUsers);

export default userRouter;