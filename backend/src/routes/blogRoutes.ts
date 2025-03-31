import express from 'express';
import { auth } from '../middleware/authMiddleware';
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';
import BlogController from '../controllers/blogController';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', auth, createBlog);
router.put("/:id", auth, BlogController.updateBlog);
router.delete("/:id", auth, BlogController.deleteBlog);

export default router;