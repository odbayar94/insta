import express from "express";

import protect from "../middleware/protect";
import * as posts from "../controller/posts"

const router = express.Router();

router.route("/")
.post(protect,posts.createNew)
.get(protect,posts.getPosts);

export default router;