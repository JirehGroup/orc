// routes/eventRoutes.ts

import express from 'express';
import { auth } from '../middleware/authMiddleware';
import { eventController } from '../controllers/eventController';

const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEvent);
router.post('/', auth, eventController.createEvent);
router.put('/:id', auth, eventController.updateEvent);
router.delete('/:id', auth, eventController.deleteEvent);

export default router;
