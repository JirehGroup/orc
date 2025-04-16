"use client";

    import React, { useState } from "react";
    import Header from "@/components/common/Header";
    import Footer from "@/components/common/Footer";
    import { X } from "lucide-react";


    type NewsItem = {
      id: number;
      date: string;
      title: string;
      content: string;
      image: string;
    };

    const latestNews: NewsItem[] = [
      {
        id: 1,
        date: "30.03.25",
        title: "IN THE EYES",
        content: "Singapore's very own talent shares her view of the photography scene.",
        image: "/con.jpg",
      },
      {
        id: 2,
        date: "29.03.25",
        title: "BEST SPOTS IN LONDON",
        content: "Where are the hidden gems? Showcase your lens' magic.",
        image: "/con.jpg",
      },
      {
        id: 3,
        date: "28.03.25",
        title: "A LETTER TO YOU",
        content: "Letters are reflective; photos speak a thousand words.",
        image: "/con.jpg",
      },
    ];

    const featuredNews: NewsItem = {
      id: 4,
      date: "26.03.25",
      title: "CARRIE FLEETE NABS AWARD OF THE YEAR",
      content: "Carrie swiftly nabs home Award of the Year 2025.",
      image: "/con.jpg",
    };

    const oldNews: NewsItem[] = [
      {
        id: 5,
        date: "29.03.25",
        title: "CAMERON ALTON FT. ALL NEW CONVERSE COLLECTION",
        content: "When a new Converse collection drops...",
        image: "/con.jpg",
      },
      {
        id: 6,
        date: "27.03.25",
        title: "FAVOURITE WILDLIFE PHOTOGRAPHERS 2025",
        content: "Wildlife animals aren't easy to snap...",
        image: "/con.jpg",
      },
    ];

    export default function NewsPage() {
      const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

      const handleNewsClick = (news: NewsItem) => {
        setSelectedNews(news);
      };

      const closePopup = () => {
        setSelectedNews(null);
      };

      return (
        <div className="flex flex-col min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />

          <main className="flex-grow container mx-auto pt-32 pb-20 px-6 lg:px-24 space-y-20">
            {/* FEATURED */}
            <section>
              <h2 className="relative text-2xl font-extrabold text-red-600 dark:text-red-400 mb-8 pb-3 tracking-wide transition-all duration-300 hover:tracking-wider">
                <span className="relative z-10">FEATURED</span>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 dark:bg-red-400 rounded-full transform transition-all duration-300 group-hover:w-24"></span>
              </h2>
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-80 object-cover opacity-80 transition-opacity duration-300 hover:opacity-90"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <p className="text-sm mb-2 opacity-80">{featuredNews.date}</p>
                  <h3 className="text-3xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md transition-transform duration-300 hover:scale-105">
                    {featuredNews.title}
                  </h3>
                  <p className="mb-32 max-w-lg text-gray-200">{featuredNews.content}</p>
                  <button className="bg-gray-600 dark:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold dark:hover:bg-red-600 hover:bg-red-600 transition transform hover:scale-105">
                    READ MORE
                  </button>
                </div>
              </div>
            </section>

            {/* LATEST NEWS */}
            <section>
              <h2 className="relative text-2xl font-extrabold text-red-600 dark:text-red-400 mb-8 pb-3 tracking-wide transition-all duration-300 hover:tracking-wider">
                <span className="relative z-10">LATEST NEWS</span>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 dark:bg-red-400 rounded-full transform transition-all duration-300 group-hover:w-24"></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestNews.map((item) => (
                  <div
                    key={item.id}
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md"
                    onClick={() => handleNewsClick(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-60 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md" />
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <p className="text-sm opacity-80">{item.date}</p>
                      <h3 className="font-extrabold text-xl tracking-tight transition-transform duration-300 group-hover:translate-y-[-4px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* OLD NEWS */}
            <section>
              <h2 className="relative text-2xl font-extrabold text-red-600 dark:text-red-400 mb-8 pb-3 tracking-wide transition-all duration-300 hover:tracking-wider">
                <span className="relative z-10">OLD NEWS</span>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600 dark:bg-red-400 rounded-full transform transition-all duration-300 group-hover:w-24"></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {oldNews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-700 transition p-4 flex flex-col sm:flex-row gap-4 shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-1/3 h-36 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="text-sm opacity-70 mb-1">{item.date}</p>
                      <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 hover:text-red-600 dark:hover:text-red-400">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-80">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <Footer />

          {/* Popup Modal */}
          {selectedNews && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg relative transform transition-all duration-300 scale-100">
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-transform duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <p className="text-sm opacity-70 mb-2">{selectedNews.date}</p>
                <h3 className="text-2xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                  {selectedNews.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{selectedNews.content}</p>
              </div>
            </div>
          )}
        </div>
      );
    }
