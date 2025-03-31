// services/blogService.ts

import { BlogInput, BlogSchema } from "../schemas/blogSchema";
import BlogModel, { IBlog } from "../models/blogModels";

export const blogService = {
  getAllBlogs: async (): Promise<IBlog[]> => {
    return await BlogModel.find();
  },

  getBlog: async (id: string): Promise<IBlog | null> => {
    return await BlogModel.findById(id);
  },

  createBlog: async (data: BlogInput): Promise<IBlog> => {
    const validatedData = BlogSchema.parse(data);
    const blog = new BlogModel(validatedData);
    return await blog.save();
  },

  updateBlog: async (id: string, data: Partial<IBlog>): Promise<IBlog | null> => {
    const validatedData = BlogSchema.partial().parse(data);
    return await BlogModel.findByIdAndUpdate(id, validatedData, { new: true });
  },

  deleteBlog: async (id: string): Promise<IBlog | null> => {
    return await BlogModel.findByIdAndDelete(id);
  },
};