import express from "express";
import * as posts from "../controller/posts"

const router = express.Router();
// userRouter.post("/register", users.registerUser);

// router.post("/",posts.createNew);
router.get("/",posts.getPosts);


export default router;