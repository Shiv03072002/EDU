"use client";

import { Target, ArrowRight } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "NEET Preparation",
    desc: "Explore notes, mock tests, biology resources, and previous papers to prepare effectively for the NEET exam.",
  },
  {
    title: "JEE Preparation",
    desc: "Access physics formulas, practice papers, mock tests, and study materials designed for JEE preparation.",
  },
  {
    title: "CUET Preparation",
    desc: "Find study guides, practice questions, and important resources to help you succeed in the CUET entrance exam.",
  },
  {
    title: "Class 12 Boards",
    desc: "Discover notes, sample papers, and study guides to help you prepare for Class 12 board exams.",
  },
];

export default function StartPreparing() {
  return (
    <section className="relative bg-gray-100 py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex gap-10 items-center justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-1  rounded-full bg-blue-50 text-blue-600 text-sm font-semibold  mb-4">
              START PREPARING
            </span>

            <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight max-w-150">
              Start Preparing For Your Next Exam
            </h2>
          </div>

          <p className="text-gray-500 max-w-md">
            Choose your exam or class and explore curated study materials,
            notes, mock tests, and guides designed to help you prepare with
            confidence.
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative grid md:grid-cols-4  border border-gray-200 bg-white">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative border-r border-gray-200 last:border-r-0 bg-white"
            >
              {/* Card content wrapper with overflow hidden for hover effect */}
              <div className="relative p-8 pt-12 overflow-hidden">
                {/* Bottom to top overlay effect - slides up on hover */}
                <div className="absolute inset-0 bg-[#2f66d0] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

                {/* CONTENT - Left aligned with larger text */}
                <div className="relative z-10 group-hover:text-white transition-colors duration-500 text-left">
                  <h3 className="font-semibold text-xl mb-3 text-gray-900 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-base mb-6 text-gray-500 group-hover:text-white/90 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex justify-start">
                    <button className="flex items-center gap-2 text-base font-medium text-gray-700 group-hover:text-white">
                      Explore Resources
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ICON - Separate div outside overflow hidden */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 ">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 border group-hover:border-gray-300 ">
                  <Target className="w-10 h-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE DOTS */}
      <div className="absolute right-6 top-24 flex flex-col gap-3">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
      </div>

      {/* LEFT ARROW (optional) */}
      <div className="absolute -left-2 top-60 -translate-y-1/2 z-80">
        <Image
          src="/images/home/red.png" // Update this path to your actual image
          alt="left arrow"
          width={32}
          height={32}
          className="w-8 h-8 md:w-20 md:h-18 scale-x-[-1]  "
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-20">
        <Image
          src="/images/prep/sp.png"
          alt="left arrow"
          width={32}
          height={32}
          className="w-8 h-8 md:w-40 md:h-40    "
        />
      </div>
    </section>
  );
}
