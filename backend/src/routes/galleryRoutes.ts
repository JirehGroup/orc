// routes/galleryRoutes.ts

import express from "express";
import { auth } from "../middleware/authMiddleware";
import { galleryController } from "../controllers/galleryController";

const router = express.Router();

router.get("/", galleryController.getAllGalleries);
router.get("/:id", galleryController.getGallery); // Added missing route
router.post("/", auth, galleryController.createGallery);
router.put("/:id", auth, galleryController.updateGallery);
router.delete("/:id", auth, galleryController.deleteGallery);

export default router;
