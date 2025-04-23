/* eslint-disable @next/next/no-img-element */
// @/app/gallery/page.tsx

"use client";
import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const galleryItems = [
  {
    id: 1,
    title: "Beautiful Sunset",
    image: "con.jpg",
  },
  {
    id: 2,
    title: "Mountain View",
    image: "con.jpg",
  },
  {
    id: 3,
    title: "City Lights",
    image: "con.jpg",
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Add pt-16 to account for the fixed navbar height */}
      <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        <section>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                onClick={() => setSelectedImage(item.image)} // Open modal with selected image
              >
                {/* Image */}
                {item.image && (
                  <div className="overflow-hidden rounded-md mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-center">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal for Image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
            <button
              onClick={() => setSelectedImage(null)} // Close modal
              className="absolute top-2 right-2 text-white bg-black rounded-full p-1 hover:bg-gray-700"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-md"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;