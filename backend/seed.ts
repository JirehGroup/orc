import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "./src/models/blogModels"; // Import your Blog model

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "your_super_secret_key";

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully!");

    const sampleBlog = new Blog({
      title: "Sample Blog Post",
      description: "This is a test blog for checking database connection.",
      article: "This blog is inserted using seed.ts",
      images: ["https://picsum.photos/536/354"],
    });

    await sampleBlog.save();
    console.log("Sample blog inserted successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

seedDB();
