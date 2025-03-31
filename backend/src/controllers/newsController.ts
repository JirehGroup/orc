// controllers/newsController.ts
import { Request, Response, RequestHandler } from 'express';
import { newsService } from '../services/newsSevice';
import { NewsItem } from '../models/newsModel';

export const newsController = {
  getAllNews: (async (req: Request, res: Response) => {
    try {
      const news = await newsService.getAllNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }) as RequestHandler,

  getNews: (async (req: Request, res: Response) => {
    try {
      const news = await newsService.getNews(req.params.id);
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }) as RequestHandler,

  createNews: (async (req: Request, res: Response) => {
    try {
      const newNews = await newsService.createNews(req.body);
      res.status(201).json(newNews);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create news' });
    }
  }) as RequestHandler,

  updateNews: (async (req: Request, res: Response) => {
    try {
      const updatedNews = await newsService.updateNews(req.params.id, req.body);
      if (!updatedNews) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.json(updatedNews);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update news' });
    }
  }) as RequestHandler,

  deleteNews: (async (req: Request, res: Response) => {
    try {
      const result = await newsService.deleteNews(req.params.id);
      if (!result) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.json({ message: 'News deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete news' });
    }
  }) as RequestHandler
};
