
// controllers/galleryController.ts
import { Request, Response } from "express";
import Gallery from "../models/galleryModel";

export const getGalleries = async (req: Request, res: Response) => {
  try {
    const galleries = await Gallery.find();
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gallery items" });
  }
};

export const createGallery = async (req: Request, res: Response) => {
  try {
    const { title, imageUrl } = req.body;
    const newGallery = new Gallery({ title, imageUrl });
    await newGallery.save();
    res.status(201).json(newGallery);
  } catch (error) {
    res.status(500).json({ error: "Failed to create gallery item" });
  }
};

export const updateGallery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedGallery = await Gallery.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedGallery);
  } catch (error) {
    res.status(500).json({ error: "Failed to update gallery item" });
  }
};

export const deleteGallery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Gallery.findByIdAndDelete(id);
    res.json({ message: "Gallery item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete gallery item" });
  }
};
