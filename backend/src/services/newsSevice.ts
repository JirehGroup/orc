import { NewsItem, CreateNewsDto, UpdateNewsDto } from '../models/newsModel';

// This would be replaced with actual database calls
const news: NewsItem[] = [];

export const newsService = {
  async getAllNews(): Promise<NewsItem[]> {
    return news;
  },

  async getNews(id: string): Promise<NewsItem | undefined> {
    return news.find(item => item.id === id);
  },

  async createNews(data: CreateNewsDto): Promise<NewsItem> {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      ...data
    };
    news.push(newNews);
    return newNews;
  },

  async updateNews(id: string, data: UpdateNewsDto): Promise<NewsItem | undefined> {
    const index = news.findIndex(item => item.id === id);
    if (index === -1) return undefined;

    news[index] = {
      ...news[index],
      ...data
    };
    return news[index];
  },

  async deleteNews(id: string): Promise<boolean> {
    const index = news.findIndex(item => item.id === id);
    if (index === -1) return false;

    news.splice(index, 1);
    return true;
  }
};