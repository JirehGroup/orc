/* eslint-disable @next/next/no-img-element */
// @/app/events/page.tsx

"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Calendar, MapPin } from "lucide-react";

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  location: string;
};

const upcomingEvents: Event[] = [];
const pastEvents: Event[] = [];


const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div
        className="relative w-full h-76 bg-cover bg-center mb-10"
        style={{ backgroundImage: `url('/hand.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white dark:text-gray-400 px-24 py-8">
          <h1 className="text-6xl font-extrabold">Events</h1>
          <p className="mt-2 text-lg text-center">
            Stay updated with our latest events and activities
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto pt-2 pb-16 px-4 lg:px-24">
        {/* Header Image */}

        {/* UPCOMING EVENTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 relative">
            Upcoming Events
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-600"></span>
          </h2>
          <div className="space-y-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col md:flex-row items-start p-6 shadow-sm hover:shadow-md transition bg-white dark:bg-black"
                >
                  <div className="flex-1 mb-4 md:mb-0 md:pr-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {event.title}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 flex items-center mt-2">
                      <Calendar className="w-4 h-4 mr-2 text-red-600" />
                      {event.date}
                    </p>
                    <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                  <div className="relative w-full md:w-1/2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-120 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                    <p className="absolute bottom-0.5 w-full text-black bg-gray-300 dark:bg-gray-800 dark:text-white bg-opacity-50 py-1 rounded flex items-center justify-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      {event.location}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 italic">No upcoming events at the moment.</p>
            )}
          </div>
        </section>

        {/* PAST EVENTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 relative">
            Past Events
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-600"></span>
          </h2>
          <div className="space-y-6">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col md:flex-row items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800"
                >
                  <div className="overflow-hidden rounded-md w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-52 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                    <p className="flex items-center text-sm mt-1 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </p>
                    <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 italic">No past events available.</p>
            )}
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;