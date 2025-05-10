/* eslint-disable @typescript-eslint/no-unused-vars */
// @/app/page.tsx

"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { translations } from "@/translations";
import { useLanguage } from "@/components/context/LanguageContext";
import { StyleSheet, useInfiniteCarousel } from "@/components/ui/custom/Carousel";
import { DirectionAwareHover } from "@/components/ui/aceternity/direction-aware-hover";
import { TimelinePage } from "@/components/ui/custom/Timeline";
import { Hero } from "@/components/common/Hero";

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

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-24">
          <Hero />
        </section>

        <section className="py-24">
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

