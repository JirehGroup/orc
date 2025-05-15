// @/components/common/Hero.tsx

"use client";
import React from "react";
import Image from "next/image";
import { TreeDeciduous } from "lucide-react";
// import { LayoutGrid } from "@/components/ui/aceternity/layout-grid";

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
      <div className="w-full mb-10">
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
    </div>
  );
}