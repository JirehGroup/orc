import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "./src/models/blogModels";
import Event from "./src/models/eventModels";
import Gallery from "./src/models/galleryModels";
import News from "./src/models/newsModels";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "your_super_secret_key";

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully!");

    // Clear existing data (optional, to avoid duplicates)
    await Blog.deleteMany({});
    await Event.deleteMany({});
    await Gallery.deleteMany({});
    await News.deleteMany({});

    // Sample Blogs
    const sampleBlogs = [
      {
        title: "First Blog Post",
        description: "An introduction to our blogging journey.",
        article: "Welcome to our blog! Here we share insightful content.",
        images: ["https://picsum.photos/500/300"],
      },
      {
        title: "Tech Trends 2025",
        description: "Exploring upcoming technology trends.",
        article: "AI, Blockchain, and Quantum Computing are shaping the future.",
        images: ["https://picsum.photos/600/400"],
      },
      {
        title: "Healthy Lifestyle Tips",
        description: "How to maintain a healthy lifestyle?",
        article: "Daily exercise and a balanced diet are key to good health.",
        images: ["https://picsum.photos/700/500"],
      },
    ];
    await Blog.insertMany(sampleBlogs);

    // Sample Events
    const sampleEvents = [
      {
        title: "Tech Conference 2025",
        description: "A global event discussing AI and automation.",
        article: "Join industry experts for insights into the future of tech.",
        images: ["https://picsum.photos/600/400"],
      },
      {
        title: "Startup Pitch Night",
        description: "Showcase your startup ideas to investors.",
        article: "A night of innovation and networking.",
        images: ["https://picsum.photos/500/350"],
      },
      {
        title: "Music Festival 2025",
        description: "A celebration of music and arts.",
        article: "Experience live performances from global artists.",
        images: ["https://picsum.photos/550/350"],
      },
    ];
    await Event.insertMany(sampleEvents);

    // Sample Gallery
    const sampleGalleries = [
      {
        mediaType: "image",
        mediaUrl: "https://picsum.photos/400/300",
        description: "A beautiful sunset captured in the mountains.",
      },
      {
        mediaType: "video",
        mediaUrl: "https://www.example.com/sample-video.mp4",
        description: "An inspiring speech from the tech summit.",
      },
      {
        mediaType: "image",
        mediaUrl: "https://picsum.photos/500/400",
        description: "A moment from the startup pitch event.",
      },
    ];
    await Gallery.insertMany(sampleGalleries);

    // Sample News
    const sampleNews = [
      {
        title: "Breaking: AI Revolution 2025",
        description: "AI is transforming every industry worldwide.",
        content: "Experts predict that AI will take over many repetitive jobs.",
        images: ["https://picsum.photos/450/300"],
        date: "2025-04-01",
      },
      {
        title: "SpaceX Launch Success",
        description: "Elon Musk's SpaceX successfully launches Starship.",
        content: "This marks a new era in space travel and colonization.",
        images: ["https://picsum.photos/600/400"],
        date: "2025-03-30",
      },
      {
        title: "New iPhone 2025 Released",
        description: "Apple introduces its latest flagship smartphone.",
        content: "The iPhone 2025 comes with groundbreaking new features.",
        images: ["https://picsum.photos/550/350"],
        date: "2025-04-02",
      },
    ];
    await News.insertMany(sampleNews);

    console.log("Sample data inserted successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting sample data:", error);
    mongoose.connection.close();
  }
};

seedDB();