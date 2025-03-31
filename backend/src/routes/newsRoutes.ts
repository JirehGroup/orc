import express from 'express';
import { newsController } from '../controllers/newsController';

const router = express.Router();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNews);
router.post('/', newsController.createNews);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

export default router;