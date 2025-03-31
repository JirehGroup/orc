// routes/newsRoutes.ts

import express from 'express';
import { auth } from '../middleware/authMiddleware';
import { newsController } from '../controllers/newsController';

const router = express.Router();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNews);
router.post('/', auth, newsController.createNews);
router.put('/:id', auth, newsController.updateNews);
router.delete('/:id', auth, newsController.deleteNews);

export default router;
