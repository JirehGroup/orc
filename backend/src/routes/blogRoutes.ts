// routes/blogRoutes.ts

import express from "express";
import { auth } from "../middleware/authMiddleware";
import { blogController } from "../controllers/blogController";

const router = express.Router();

router.get("/", blogController.getAllBlogs);
router.post("/", auth, blogController.createBlog);
router.put("/:id", auth, blogController.updateBlog);
router.delete("/:id", auth, blogController.deleteBlog);

export default router;
