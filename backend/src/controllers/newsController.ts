/* eslint-disable @typescript-eslint/no-unused-vars */
// controller/newsController.ts

import { Request, Response } from "express";
import { newsService } from "../services/newsService";

export const newsController = {
  getAllNews: async (req: Request, res: Response): Promise<void> => {
    try {
      const news = await newsService.getAllNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news" });
    }
  },

  getNews: async (req: Request, res: Response): Promise<void> => {
    try {
      const news = await newsService.getNews(req.params.id);
      if (!news) {
        res.status(404).json({ error: "News not found" });
        return;
      }
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news" });
    }
  },

  createNews: async (req: Request, res: Response): Promise<void> => {
    try {
      const newNews = await newsService.createNews(req.body);
      res.status(201).json(newNews);
    } catch (error) {
      res.status(400).json({ error: "Failed to create news" });
    }
  },

  updateNews: async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedNews = await newsService.updateNews(req.params.id, req.body);
      if (!updatedNews) {
        res.status(404).json({ error: "News not found" });
        return;
      }
      res.json(updatedNews);
    } catch (error) {
      res.status(400).json({ error: "Failed to update news" });
    }
  },

  deleteNews: async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await newsService.deleteNews(req.params.id);
      if (!result) {
        res.status(404).json({ error: "News not found" });
        return;
      }
      res.json({ message: "News deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete news" });
    }
  },
};
