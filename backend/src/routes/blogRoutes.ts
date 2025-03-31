import express from 'express';
import { auth } from '../middleware/authMiddleware';
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

export default router;
