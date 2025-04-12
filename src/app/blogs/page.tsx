/* eslint-disable @next/next/no-img-element */
// @/app/blogs/page.tsx

"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Calendar, User, Tag } from "lucide-react";

const latestBlogs = [
  {
    id: 1,
    date: "April 15, 2025",
    title: "The Future of AI",
    content:
      "Explore the latest advancements in artificial intelligence and how they are shaping the future of technology.",
    image: "/con.jpg",
    author: "John Doe",
    tags: ["AI", "Technology", "Innovation"],
  },
  {
    id: 2,
    date: "April 10, 2025",
    title: "Web Development Trends",
    content:
      "Discover the top web development trends for 2025 and how they can impact your projects.",
    image: "/con.jpg",
    author: "Jane Smith",
    tags: ["Web Development", "Trends", "Programming"],
  },
];

const olderBlogs = [
  {
    id: 1,
    date: "March 20, 2025",
    title: "Data Science Insights",
    content:
      "Key insights from the latest developments in data science and machine learning.",
    image: "/con.jpg",
    author: "Alice Johnson",
    tags: ["Data Science", "Machine Learning", "AI"],
  },
  {
    id: 2,
    date: "March 5, 2025",
    title: "Cloud Computing Innovations",
    content:
      "Learn about the latest innovations in cloud computing and how they are transforming businesses.",
    image: "/con.jpg",
    author: "Bob Brown",
    tags: ["Cloud Computing", "Technology", "Business"],
  },
];

const BlogsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Add pt-16 to account for the fixed navbar height */}
      <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        {/* Latest Blogs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlogs.map((blog) => (
              <div
                key={blog.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                {blog.image && (
                  <div className="overflow-hidden rounded-md mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                  </div>
                )}

                {/* Title and Content */}
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blog.date}
                </p>
                <p className="text-lg mb-4">{blog.content}</p>

                {/* Author and Tags */}
                <p className="flex items-center text-sm text-muted-foreground mb-2">
                  <User className="w-4 h-4 mr-2" />
                  {blog.author}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Older Blogs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Dialogue Older Blogs</h2>
          <div className="space-y-6">
            {olderBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col md:flex-row items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                {blog.image && (
                  <div className="overflow-hidden rounded-md w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                  </div>
                )}

                {/* Title and Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="flex items-center text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blog.date}
                  </p>
                  <p className="text-lg mb-4">{blog.content}</p>

                  {/* Author and Tags */}
                  <p className="flex items-center text-sm text-muted-foreground mb-2">
                    <User className="w-4 h-4 mr-2" />
                    {blog.author}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogsPage;