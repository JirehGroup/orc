// services/newsService.ts

import { NewsInput, NewsSchema } from "../schemas/newsSchema";
import NewsModel, { INews } from "../models/newsModels";

export const newsService = {
  getAllNews: async (): Promise<INews[]> => {
    return await NewsModel.find();
  },

  getNews: async (id: string): Promise<INews | null> => {
    return await NewsModel.findById(id);
  },

  createNews: async (data: NewsInput): Promise<INews> => {
    const validatedData = NewsSchema.parse(data);
    const news = new NewsModel(validatedData);
    return await news.save();
  },

  updateNews: async (id: string, data: Partial<INews>): Promise<INews | null> => {
    const validatedData = NewsSchema.partial().parse(data);
    return await NewsModel.findByIdAndUpdate(id, validatedData, { new: true });
  },

  deleteNews: async (id: string): Promise<INews | null> => {
    return await NewsModel.findByIdAndDelete(id);
  },
};
