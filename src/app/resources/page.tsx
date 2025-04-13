"use client";
import React from "react";
import { BookOpen, FileText, Download } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const publications = [
  {
    title: "Faith & Society: Volume I",
    description: "An in-depth analysis of faith-based cooperation and its societal impacts.",
    link: "#",
  },
  {
    title: "Community Healing Guide",
    description: "Strategies for interfaith conflict resolution and community building.",
    link: "#",
  },
];

const reports = [
  {
    title: "Annual Impact Report 2024",
    description: "A yearly overview of our activities, financials, and impact stories.",
    link: "#",
  },
  {
    title: "Dialogue Outcomes Brief",
    description: "Summary of interfaith dialogues and collaboration outcomes.",
    link: "#",
  },
];

export default function ResourcePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>

        {/* Publications */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Publications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-4">{pub.description}</p>
                <a
                  href={pub.link}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white dark:text-black  rounded hover:bg-primary/90 transition"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View / Download
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Reports */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Reports</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((rep, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2">{rep.title}</h3>
                <p className="text-gray-600 mb-4">{rep.description}</p>
                <a
                  href={rep.link}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white dark:text-black rounded hover:bg-primary/90 transition"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View / Download
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
