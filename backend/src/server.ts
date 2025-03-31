/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "./app";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import connectDB from './config/db';

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
