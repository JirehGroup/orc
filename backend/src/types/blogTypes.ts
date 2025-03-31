// types/blogTypes.ts

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string | string[];
  tags?: string[];
}

export interface CreateBlogDto {
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string | string[];
  tags?: string[];
}

export interface UpdateBlogDto {
  title?: string;
  content?: string;
  author?: string;
  date?: string;
  image?: string | string[];
  tags?: string[];
}
