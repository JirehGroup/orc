// src/app.ts

import express from "express";
import cors from "cors";
import morgan from "morgan";
import galleryRoutes from "./routes/galleryRoutes"; 
import blogRoutes from "./routes/blogRoutes"; 
import newsRoutes from "./routes/newsRoutes";
import eventRoutes from "./routes/eventRoutes";
import authRoutes from "./routes/authRoutes"; // Import auth routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/gallery", galleryRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes); 
export default app;