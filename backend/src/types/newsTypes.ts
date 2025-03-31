
// types/newsTypes.ts

export interface NewsItem {
  id: string;  // Similar note to Blog and Event types (use ObjectId if needed)
  title: string;
  date: string;
  content: string;
  image?: string | string[];
  category: string;
}

export interface CreateNewsDto {
  title: string;
  date: string;
  content: string;
  image?: string | string[];
  category: string;
}

export interface UpdateNewsDto {
  title?: string;
  date?: string;
  content?: string;
  image?: string | string[];
  category?: string;
}
