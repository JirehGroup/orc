"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Calendar, MapPin } from "lucide-react";

const latestNews = [
  {
    id: 1,
    date: "April 10, 2025",
    title: "Tech Innovations 2025",
    content: "Discover the latest advancements in technology at this year's Tech Innovations event.",
    image: "/con.jpg",
  },
  {
    id: 2,
    date: "April 5, 2025",
    title: "AI Breakthroughs",
    content: "Explore groundbreaking developments in artificial intelligence and machine learning.",
    image: "/con.jpg",
  },
];

const oldNews = [
  {
    id: 1,
    date: "March 15, 2025",
    title: "Web Development Trends",
    content: "A deep dive into the latest trends in web development for 2025.",
    image: "/con.jpg",
  },
  {
    id: 2,
    date: "February 20, 2025",
    title: "Data Science Insights",
    content: "Key insights from the Data Science Meetup held earlier this year.",
    image: "/con.jpg",
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
        <Header />

        <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        {/* Latest News Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-md">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-60 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                  </div>

                {/* Title and Content */}
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-lg line-clamp-2">{news.content}</p>
                <p className="flex items-center text-sm mt-1">
                <Calendar className="w-4 h-4 mr-2" />
                {news.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Old News Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Old News</h2>
          <div className="space-y-6">
            {oldNews.map((news) => (
              <div
                key={news.id}
                className="flex flex-col md:flex-row items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-md w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-52 object-cover rounded-md transform transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Title and Content */}
                <div className="flex-1">
                <h3 className="text-xl font-semibold">{news.title}</h3>
                <p className="flex items-center text-sm mt-1">
                <Calendar className="w-4 h-4 mr-2" />
                {news.date}
                </p>
                <p className="text-muted-foreground line-clamp-2">{news.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}