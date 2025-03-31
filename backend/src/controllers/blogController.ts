/* eslint-disable @typescript-eslint/no-unused-vars */
// controller/blogController.ts

import { Request, Response } from "express";
import { blogService } from "../services/blogService";

export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await blogService.getAllBlogs(); // Updated to use blogService
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await blogService.createBlog(req.body); // Updated to use blogService
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body); // Updated to use blogService

    if (!blog) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }

    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await blogService.deleteBlog(req.params.id); // Updated to use blogService

    if (!blog) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
