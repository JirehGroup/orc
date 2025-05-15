// @/components/common/Hero.tsx

"use client";
import React from "react";
import Image from "next/image";
import { TreeDeciduous } from "lucide-react";
import { LayoutGrid } from "@/components/ui/aceternity/layout-grid";

export function Hero() {
  return (
    <div className="h-screen py-20 w-full">
      <h1 className="text-4xl text-center font-bold text-dark dark:text-white mb-8">
        Welcome to Inter-Religious Council of{" "}
        <span className="inline-flex items-center">
          Orom
          <TreeDeciduous className="w-5 h-5 text-green-700 mx-1" />
          a
        </span>
      </h1>
      <div className="w-full">
        <div className="relative w-full h-[30rem] overflow-hidden">
          <Image
            src="/images/flag.png"
            width={2500}
            height={1080}
            alt="Oromia Flag"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <LayoutGrid cards={cards} />
    </div>

  );
}

interface CardContentProps {
  title: string;
  description: string;
}

const CardContent = ({ title, description }: CardContentProps) => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      {description}
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <CardContent
      title="lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />,
    className: "md:col-span-2",
    thumbnail: "/images/gallery/photo_2025-03-26_01-00-07.jpg",
  },
  {
    id: 2,
    content: <CardContent
      title="lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
    />,
    className: "col-span-1",
    thumbnail: "/images/gallery/photo_2025-03-26_01-00-09.jpg",
  },
  {
    id: 3,
    content: <CardContent
      title="lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />,
    className: "col-span-1",
    thumbnail: "/images/gallery/photo_2025-03-26_01-00-13.jpg",
  },
  {
    id: 4,
    content: <CardContent
      title="lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />,
    className: "md:col-span-2",
    thumbnail: "/images/gallery/photo_2025-03-26_01-00-09.jpg",
  },
];
