"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Calendar, User, Tag, Eye, Goal, Activity, Handshake } from "lucide-react";

const dialogue = {
  title: "Interfaith Dialogue for Peace",
  date: "April 12, 2025",
  author: "Interreligious Council",
  content: "Discover the top web development trends for 2025 and how they can impact your projects.",
  tags: ["Interfaith", "Peace", "Dialogue", "Community"],
};

const DialoguePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        {/* Intro Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{dialogue.title}</h1>
          <p className="text-lg flex justify-center items-center gap-2 text-sm mb-2">
            <Calendar className="w-4 h-4" />
            {dialogue.date}
          </p>
          <p className="text-lg text-lg">{dialogue.content}</p>
          <p className="text-sm text-lg flex justify-center items-center mt-2">
            <User className="w-4 h-4 mr-1" />
            {dialogue.author}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {dialogue.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className=" rounded-xl shadow-md p-6 md:p-10 space-y-4">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            To build a harmonious society where diverse religions coexist peacefully through dialogue, cooperation, and shared values.
          </p>
        </section>

        {/* Mission Section */}
        <section className="rounded-xl shadow-md p-6 md:p-10 space-y-4">
          <div className="flex items-center gap-3">
            <Goal className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            To promote understanding among faith communities through dialogue forums, joint initiatives, and education on mutual respect and peacebuilding.
          </p>
        </section>

        {/* Activities Section */}
        <section className=" rounded-xl shadow-md p-6 md:p-10 space-y-4">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Our Activities</h2>
          </div>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-lg space-y-2">
            <li>Organizing interfaith dialogue sessions across Oromia</li>
            <li>Hosting peacebuilding workshops and conferences</li>
            <li>Collaborative humanitarian projects with religious institutions</li>
            <li>Publishing educational materials promoting tolerance</li>
          </ul>
        </section>

        {/* Join Us Section */}
        <section className="bg-primary/10 rounded-xl text-center py-16 px-6 mt-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Handshake className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Be part of our mission to foster peace and unity across religious lines. Let your voice contribute to a more compassionate future.
            </p>
            <button className="px-6 py-3 bg-primary text-white dark:text-black rounded-full hover:bg-primary/80 transition">
              <a href="/getInvolved">Get Involved</a>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DialoguePage;
