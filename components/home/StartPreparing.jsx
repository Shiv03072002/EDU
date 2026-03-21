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
    <section className="relative bg-gray-100 py-16 px-4 sm:px-6 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between mb-16 md:mb-20">
          <div className="flex-shrink-0">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              START PREPARING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 leading-tight max-w-xs sm:max-w-sm md:max-w-lg">
              Start Preparing For Your Next Exam
            </h2>
          </div>

          <p className="text-gray-500 text-sm sm:text-base max-w-full md:max-w-md">
            Choose your exam or class and explore curated study materials,
            notes, mock tests, and guides designed to help you prepare with
            confidence.
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-13 md:gap-0 border border-gray-200  ">
          {data.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white
                /* Mobile: bottom border on all but last */
                border-b border-gray-200 last:border-b-0
                /* SM (2-col grid): remove bottom border on last two, add right border on odd (left col) */
                sm:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0
                /* MD+: restore horizontal layout */
                md:border-b-0 md:border-r md:last:border-r-0
              `}
            >
              {/* Card content with overflow hidden for hover effect */}
              <div className="relative p-6 sm:p-8 pt-14 sm:pt-14 overflow-hidden min-h-[200px] sm:min-h-[220px]">
                {/* Bottom to top overlay effect */}
                <div className="absolute inset-0 bg-[#2f66d0] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

                {/* CONTENT */}
                <div className="relative z-10 text-left">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base mb-5 sm:mb-6 text-gray-500 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex justify-start">
                    <button className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 group-hover:text-white transition-colors duration-500">
                      Explore Resources
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ICON — floats above card top */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 border group-hover:border-gray-300">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE DOTS — hide on very small screens */}
      <div className="hidden sm:block absolute right-0 -top-40 w-[200px] h-full z-10 pointer-events-none overflow-hidden">

  {/* Top small */}
  <span className="absolute top-30 right-6 w-6 h-6 bg-blue-600 rounded-[70%_40%_55%_45%]" />

  {/* Big middle */}
  <span className="absolute top-40 -right-4 w-10 h-10 bg-blue-600 rounded-[70%_40%_55%_45%]" />

  {/* Medium */}
  <span className="absolute top-56 right-8 w-6 h-6 bg-blue-600 rounded-[70%_40%_55%_45%]" />

  {/* Bottom small */}
  <span className="absolute top-66 right-2 w-4 h-4 bg-blue-600 rounded-[70%_40%_55%_45%]" />

</div>
      {/* LEFT DECORATIVE IMAGE */}
      <div className="hidden sm:block absolute -left-2 top-60 -translate-y-1/2 z-10">
        <Image
          src="/images/home/red.png"
          alt="left arrow"
          width={32}
          height={32}
          className="w-8 h-8 md:w-20 md:h-18 scale-x-[-1]"
        />
      </div>

      <div className=" sm:hidden absolute -left-2 top-70 -translate-y-1/2 z-10">
        <Image
          src="/images/home/red.png"
          alt="left arrow"
          width={32}
          height={32}
          className="w-16 h-10 md:w-20 md:h-18 scale-x-[-1]"
        />
      </div>

      {/* TOP CENTER DECORATIVE IMAGE */}
      <div className="absolute left-70 md:left-1/2 md:-translate-x-1/2 -top-2 z-20">
        <Image
          src="/images/prep/sp.png"
          alt="decoration"
          width={32}
          height={32}
          className="w-20 h-24 md:w-40 md:h-40"
        />
      </div>
    </section>
  );
}
