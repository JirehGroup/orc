"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Calendar, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    date: "April 15, 2025",
    title: "Tech Conference 2025",
    description:
      "A conference for tech enthusiasts to explore new trends. Including key details such as the event name, date, time, location, and a brief overview of what attendees can expect.",
    location: "San Francisco, CA",
    image: "/con.jpg",
  },
  {
    id: 2,
    date: "April 20, 2025",
    title: "AI Workshop",
    description:
      "Hands-on workshop on AI and machine learning. Highlighting notable speakers and interactive sessions for participants.",
    location: "New York, NY",
    image: "/con.jpg",
  },
];

const pastEvents = [
  {
    id: 1,
    date: "March 10, 2025",
    title: "Web Dev Summit",
    description: "A summit for web developers to network and learn.",
    location: "Austin, TX",
    image: "/con.jpg",
  },
  {
    id: 2,
    date: "February 5, 2025",
    title: "Data Science Meetup",
    description: "A meetup for data science professionals.",
    location: "Chicago, IL",
    image: "/con.jpg",
  },
];

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden px-4 md:px-20 py-12">
      <Header />

      <main className="flex-grow container mx-auto space-y-24 lg:py-20 lg:px-44">
        {/* UPCOMING EVENTS */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                {/* Top Info */}
                <div className="space-y-3">
                  <p className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>

                  {/* Image with Hover */}
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-60 object-cover rounded-md transform transition duration-300 hover:scale-105"
                    />
                  </div>

                  <p className="text-gray-700 text-base">{event.description}</p>
                  <p className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAST EVENTS */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Past Events</h2>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row items-start p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                {/* Image with Hover */}
                <div className="overflow-hidden rounded-md w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover rounded-md transform transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </p>
                  <p className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </p>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
