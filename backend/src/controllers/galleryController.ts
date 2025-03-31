/* eslint-disable @typescript-eslint/no-unused-vars */
// controller/galleryController.ts

import { Request, Response } from "express";
import { galleryService } from "../services/galleryService";

export const galleryController = {
  getAllGalleries: async (req: Request, res: Response): Promise<void> => {
    try {
      const galleries = await galleryService.getAllGalleries();
      res.json(galleries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery items" });
    }
  },

  getGallery: async (req: Request, res: Response): Promise<void> => {
    try {
      const gallery = await galleryService.getGallery(req.params.id);
      if (!gallery) {
        res.status(404).json({ error: "Gallery item not found" });
        return;
      }
      res.json(gallery);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery item" });
    }
  },

  createGallery: async (req: Request, res: Response): Promise<void> => {
    try {
      const newGallery = await galleryService.createGallery(req.body);
      res.status(201).json(newGallery);
    } catch (error) {
      res.status(500).json({ error: "Failed to create gallery item" });
    }
  },

  updateGallery: async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedGallery = await galleryService.updateGallery(req.params.id, req.body);
      if (!updatedGallery) {
        res.status(404).json({ error: "Gallery item not found" });
        return;
      }
      res.json(updatedGallery);
    } catch (error) {
      res.status(500).json({ error: "Failed to update gallery item" });
    }
  },

  deleteGallery: async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await galleryService.deleteGallery(req.params.id);
      if (!result) {
        res.status(404).json({ error: "Gallery item not found" });
        return;
      }
      res.json({ message: "Gallery item deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete gallery item" });
    }
  },
};
