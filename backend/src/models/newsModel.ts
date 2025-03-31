export interface NewsItem {
    id: string;
    title: string;
    date: string;
    content: string;
    image?: string;
    category: string;
  }
  
  export interface CreateNewsDto {
    title: string;
    date: string;
    content: string;
    image?: string;
    category: string;
  }
  
  export interface UpdateNewsDto {
    title?: string;
    date?: string;
    content?: string;
    image?: string;
    category?: string;
  }