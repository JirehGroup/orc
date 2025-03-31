import express from "express";
import { getGalleries, createGallery, updateGallery, deleteGallery } from "../controllers/galleryController";

const router = express.Router();

router.get("/", getGalleries);
router.post("/", createGallery);
router.put("/:id", updateGallery);
router.delete("/:id", deleteGallery);

export default router;