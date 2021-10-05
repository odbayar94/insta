import express from "express";
import * as posts from "../controller/posts"

const router = express.Router();
// userRouter.post("/register", users.registerUser);

// router.post("/",posts.createNew);
router.post("/",posts.createNew);


export default router;