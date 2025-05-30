/* eslint-disable @typescript-eslint/no-unused-vars */
// @/app/page.tsx

"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { translations } from "@/translations";
import { useLanguage } from "@/components/context/LanguageContext";
import { StyleSheet, useInfiniteCarousel } from "@/components/ui/custom/Carousel";
import { ImagesSlider } from "@/components/ui/aceternity/images-slider";
import { DirectionAwareHover } from "@/components/ui/aceternity/direction-aware-hover";
import { TimelinePage } from "@/components/ui/custom/Timeline";
import Flag from "@/components/common/flag";
// import { Hero } from "@/components/common/Hero";

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language].pages.home;

  const { carouselRef: membersCarouselRef, carouselTrackRef: membersTrackRef } = useInfiniteCarousel();
  const memberLogos = [
    { src: "/images/logo/ecc.png", label: "Ethiopian Catholic Church" },
    { src: "/images/logo/ecfoe.png", label: "Evangelical Churches Fellowship of Ethiopia" },
    { src: "/images/logo/eecmy.png", label: "Ethiopian Evangelical Church Mekane Yesus" },
    { src: "/images/logo/eias.png", label: "Ethiopian Islamic Affairs Supreme Council" },
    { src: "/images/logo/ekhc.png", label: "Ethiopian Kale Heywet Church" },
    { src: "/images/logo/eoc.png", label: "Ethiopian Orthodox Church" },
    { src: "/images/logo/esda.png", label: "Ethiopian Seventh-day Adventist Church" },
  ];

  const images = [
    "/images/gallery/photo_2025-03-26_01-00-07.jpg",
    "/images/gallery/photo_2025-03-26_01-00-09.jpg",
    "/images/gallery/photo_2025-03-26_01-00-13.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Flag />
      
      <Header />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-24">
          {/* <Hero /> */}

          <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                Welcome to Inter-Religious Council of Oromia
              </motion.p>
            </motion.div>
          </ImagesSlider>

          <TimelinePage />
        </section>

        {/* Members Carousel Section */}
        <section className="py-24 relative flex justify-center items-center">
          <div id="carousel" className="w-full max-w-5xl" ref={membersCarouselRef}>
            <h1 className="text-4xl font-bold text-center mb-12">Our Members</h1>
            <div className="carousel-track" ref={membersTrackRef}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                {memberLogos.map((item, index) => (
                  <li key={index} className="flex items-center justify-center w-full">
                    <Link href={`/members?member=${index + 1}`} className="block w-full">
                      <div className="w-full h-[200px] flex items-center justify-center">
                        <DirectionAwareHover
                          imageUrl={item.src}
                          className="w-full h-full flex items-center justify-center"
                          imageClassName="object-contain max-w-full max-h-full"
                        >
                          {item.label}
                        </DirectionAwareHover>
                      </div>
                    </Link>
                  </li>
                ))}
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

