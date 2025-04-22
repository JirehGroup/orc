
"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const members = [
  {
    id: 1,
    name: "Ethiopian Catholic Church",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/ecc.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 2,
    name: "Evangelical Churches Fellowship of Ethiopia",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/ecfoe.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 3,
    name: "Ethiopian Evangelical Church Mekane Yesus",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/eecmy.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 4,
    name: "Ethiopian Islamic Affairs Supreme Council",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/eias.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 5,
    name: "Ethiopian Kale Heywet Church",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/ekhc.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 6,
    name: "Ethiopian Orthodox Church",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/eoc.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
  {
    id: 7,
    name: "Ethiopian Seventh-day Adventist Church",
    leader: "Religious",
    image: "/con.jpg",
    logo: "/images/logo/esda.png",
    bio: "Are belief systems that relate humanity to spirituality",
    info: "The Ethiopian Catholic Church is a part of the worldwide Catholic Church, in full communion with the Pope in Rome. It has its own unique traditions and practices, reflecting the rich cultural heritage of Ethiopia.",
  },
];


const MembersPage: React.FC = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
  
          {/* Members Sections */}
          {members.map((member) => (
            <section
              key={member.id}
              className="py-16 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
            >
              {/* Member Name Header */}
              <div className="bg-gradient-to-r from-gray-600 to-red-500 dark:from-red-400 dark:to-gray-700 text-white py-10 px-4 lg:px-24 mb-12">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
                  <div className="w-24 h-24 relative">
                    <img
                      src={member.logo}
                      alt={`${member.name} Logo`}
                      className="w-full h-full object-contain rounded-full shadow-md"
                    />
                  </div>
                  <h2 className="text-4xl font-extrabold">{member.name}</h2>
                </div>
              </div>
  
              {/* Member Content */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 px-4 lg:px-0">
                {/* Member Info */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-red-600 dark:text-red-400 font-medium text-lg mb-4">
                    {member.leader}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {member.bio}
                    </p>
                </div>

                {/* Member Image */}
                <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden shadow-lg flex flex-col items-center">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-105 "
                    />
                    {/* Leader Name */}
                    <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                    {member.leader}
                    </p>
                </div>
            </div>
  
              {/* Member Info Section */}
              <div className="max-w-7xl mx-auto mt-8 px-4 lg:px-0">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  {member.info}
                </p>
              </div>
            </section>
          ))}
        </main>
  
        <Footer />
      </div>
    );
  };
  
  export default MembersPage;
