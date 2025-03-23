/* eslint-disable @typescript-eslint/no-unused-vars */
// @/app/page.tsx

"use client";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {
  motion,
} from "framer-motion"
import { ArrowRight } from "lucide-react";
import { StyleSheet, useInfiniteCarousel } from "@/components/common/Carousel";

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language].pages.home;

  const { carouselRef: membersCarouselRef, carouselTrackRef: membersTrackRef } = useInfiniteCarousel();
  const { carouselRef: sponsorsCarouselRef, carouselTrackRef: sponsorsTrackRef } = useInfiniteCarousel();

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section with Globe */}
      <main className="flex-grow">
        <section className="relative h-screen mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-start lg:items-center">
              <motion.div
                className="z-10 pt-32 sm:pt-20 lg:pt-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-left">
                  <span className="text-[#F76F53]">lorem</span>
                  <span className="text-foreground"> ipsum</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-12 text-left">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                  <button className="group bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-foreground/90 transition-all flex items-center gap-2">
                    lorem ipsum
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-foreground/20 backdrop-blur-sm bg-background/30 text-foreground px-8 py-4 rounded-lg font-medium hover:bg-foreground/5 transition-colors">
                    lorem ipsum
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Members Carousel Section */}
        <section className="py-24 relative flex justify-center items-center">
          <div id="carousel" className="w-full max-w-5xl" ref={membersCarouselRef}>
            <h1 className="text-4xl font-bold text-center mb-12">
              Our Members
            </h1>
            <div className="carousel-track" ref={membersTrackRef}>
              <ul>
                <li style={{
                  backgroundImage: "url('/images/logo/ecc.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Ethiopian Catholic Church</div>
                </li>
                <li style={{
                  backgroundImage: "url('/images/logo/ecfoe.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Evangelical Churches Fellowship of Ethiopia</div>
                </li>
                <li style={{
                  backgroundImage: "url('/images/logo/eecmy.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Ethiopian Evangelical Church Mekane Yesus</div>
                </li>
                {/* Continue adding overlays to each remaining member item */}
                <li style={{
                  backgroundImage: "url('/images/logo/eias.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Ethiopian Islamic Affairs Supreme Council</div>
                </li>
                <li style={{
                  backgroundImage: "url('/images/logo/ekhc.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Ethiopian Kale Heywet Church</div>
                </li>
                <li style={{
                  backgroundImage: "url('/images/logo/eoc.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Ethiopian Orthodox Church</div>
                </li>
                <li style={{
                  backgroundImage: "url('/images/logo/esda.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay">Ethiopian Seventh-day Adventist Church</div>
                </li>
              </ul>
            </div>
            <StyleSheet />
          </div>
        </section>

        {/* Sponsors Carousel Section */}
        <section className="py-24 relative flex justify-center items-center">
          <div id="carousel" className="w-full max-w-5xl" ref={sponsorsCarouselRef}>
            <h1 className="text-4xl font-bold text-center mb-12">
              Our Sponsors
            </h1>
            <div className="carousel-track" ref={sponsorsTrackRef}>
              <ul>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
                <li style={{
                  backgroundImage: "url('/images/logo/empty.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></li>
              </ul>
            </div>
            <StyleSheet />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}