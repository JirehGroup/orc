"use client";
import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const galleryItems = [
  {
    id: 1,
    image: "con.jpg",
  },
  {
    id: 2,
    image: "con.jpg",
  },
  {
    id: 3,
    image: "con.jpg",
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(item.image)} // Open modal with selected image
              >
                <img
                  src={item.image}
                  alt={`Gallery Item ${item.id}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
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