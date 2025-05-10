/* eslint-disable @next/next/no-img-element */
// @/ app/members/page.tsx

"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const members = [
  {
    id: 1,
    name: "Ethiopian Catholic Church",
    leader: "Religious",
    image: "/images/leaders/OrtL.jpg",
    logo: "/images/logo/ecc.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 2,
    name: "Evangelical Churches Fellowship of Ethiopia",
    leader: "Religious",
    image: "/images/leaders/EvaL.jpg",
    logo: "/images/logo/ecfoe.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 3,
    name: "Ethiopian Evangelical Church Mekane Yesus",
    leader: "Religious",
    image: "/images/leaders/mekL.jpg",
    logo: "/images/logo/eecmy.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 4,
    name: "Ethiopian Islamic Affairs Supreme Council",
    leader: "Religious",
    image: "/images/leaders/MusL.jpg",
    logo: "/images/logo/eias.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 5,
    name: "Ethiopian Kale Heywet Church",
    leader: "Religious",
    image: "/images/leaders/KalL.jpg",
    logo: "/images/logo/ekhc.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 6,
    name: "Ethiopian Orthodox Church",
    leader: "Religious",
    image: "/images/leaders/OrtL.jpg",
    logo: "/images/logo/eoc.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 7,
    name: "Ethiopian Seventh-day Adventist Church",
    leader: "Religious",
    image: "/images/leaders/AdvL.jpg",
    logo: "/images/logo/esda.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
];

const MembersPage: React.FC = () => {
  const searchParams = useSearchParams();
  const initialId = parseInt(searchParams.get("member") || "1", 10);
  const [selectedMemberId, setSelectedMemberId] = useState<number>(initialId);
  const selectedMember = members.find((m) => m.id === selectedMemberId)!;


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Our Members
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to the Inter-Religious Council of Oromia members
            <br />
            Get to know the organizations behind our success.
          </p>
        </section>

        {/* Member Selector Navbar */}
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
            <div className="flex gap-4 items-center">
              {members.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300
            ${selectedMemberId === member.id
                      ? "bg-red-600 border-red-700 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 border-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                >
                  <img
                    src={member.logo}
                    alt={`${member.name} logo`}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                  <span className="whitespace-nowrap text-sm font-medium">{member.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Member Detail Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-12 w-full"
            >
              <div className="flex items-center gap-6 max-w-5xl mx-auto px-6 py-8 rounded-lg shadow-md bg-gradient-to-r from-red-500 to-gray-800">
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-red-600 bg-opacity-20 rounded-full flex items-center justify-center shadow-inner">
                  <img
                    src={selectedMember.logo}
                    alt={`${selectedMember.name} Logo`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <h2 className="text-white font-mono text-2xl md:text-3xl font-bold tracking-wide">
                  {selectedMember.name}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>


          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 px-4 lg:px-0">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-red-600 dark:text-red-400 font-medium text-lg mb-4">
                {selectedMember.leader}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {selectedMember.bio}
              </p>
            </div>

            <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden shadow-lg flex items-center justify-center group">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
              />
              <p className="absolute bottom-4 left-4 text-4xl text-red-600 bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {selectedMember.leader}
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-8 px-4 lg:px-0">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              {selectedMember.info}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;