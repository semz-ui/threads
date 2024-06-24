import express from "express";
import {
  createPost,
  deletePost,
  getFeedPosts,
  getPost,
  likeUnlikePost,
  replyToPost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/feed/:id", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/delete/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router;
