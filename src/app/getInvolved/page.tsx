"use client";
import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import { HandCoins } from "lucide-react";

const GetInvolvedPage = () => {
  const [openModal, setOpenModal] = useState<null | "donate">(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto pt-32 pb-16 px-4 lg:px-44">
        {/* Donate Section */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <HandCoins className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Donate to Support Our Cause</h2>
            <p className="text-muted-foreground">
              Your contributions help us organize interfaith dialogues, peace workshops, and humanitarian support across communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mb-8 ">
            {["/cbe.png", "/awash.png"].map((src, index) => (
              <div
                key={index}
                className="relative h-125 rounded overflow-hidden shadow-md group"
              >
                <Image
                  src={src}
                  alt={`Donate image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Donate Now Button */}
                <button
                  onClick={() => setOpenModal("donate")}
                  className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-green-800 text-white text-sm rounded-b opacity-0 group-hover:opacity-100 transition"
                >
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Section */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-2">Become a Volunteer</h2>
            <p className="text-muted-foreground">
              Join hands with us as a volunteer to facilitate peacebuilding, interfaith collaboration, and community development.
            </p>
          </div>

          <div className="text-center">
            <button
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              <a href="/contact">Join as Volunteer</a>
            </button>
          </div>
        </section>

        {/* Modal Dialog */}
        {openModal === "donate" && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
              <h3 className="text-2xl font-bold text-center">Donate Now</h3>
              <p className="text-center text-muted-foreground">
                Thank you for your interest in supporting our cause. Please use the provided bank details to make your donation.
              </p>
              <div className="text-center">
                <p className="font-bold">Bank Name: XYZ Bank</p>
                <p className="font-bold">Account Number: 123456789</p>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;