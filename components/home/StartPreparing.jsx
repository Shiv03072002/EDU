"use client";

import { Target, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

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
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative py-16 px-4 sm:px-6 md:px-10 ${
        darkMode ? "bg-[#111111]" : "bg-[#F8FAFC]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between mb-16 md:mb-20">
          <div className="flex-shrink-0">
            <div className="w-fit mb-3">
              <p
                className={`inline-block px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase ${
                  darkMode
                    ? "bg-blue-950/50 text-blue-400 border border-blue-900/50"
                    : "bg-blue-100 text-[#2563EB]"
                }`}
              >
                START PREPARING
              </p>
            </div>
            <h2
              className={`text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight max-w-xs sm:max-w-sm md:max-w-lg ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Start Preparing For Your Next Exam
            </h2>
          </div>

          <p
            className={`text-sm sm:text-base max-w-full md:max-w-md ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Choose your exam or class and explore curated study materials,
            notes, mock tests, and guides designed to help you prepare with
            confidence.
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div
          className={`relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-13 md:gap-0 md:border ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`group relative ${
                darkMode ? "bg-[#0A0A0A]" : "bg-white"
              }
                /* Mobile: bottom border on all but last */
                ${darkMode ? "border-gray-800" : "border-gray-200"} border-b 
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
                  <h3
                    className={`font-semibold text-lg sm:text-xl mb-2 sm:mb-3 transition-colors duration-500 ${
                      darkMode
                        ? "text-gray-200 group-hover:text-white"
                        : "text-gray-900 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed transition-colors duration-500 ${
                      darkMode
                        ? "text-gray-400 group-hover:text-white/90"
                        : "text-gray-500 group-hover:text-white/90"
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="flex justify-start">
                    <button
                      className={`flex items-center gap-2 text-sm sm:text-base font-medium transition-colors duration-500 ${
                        darkMode
                          ? "text-gray-400 group-hover:text-white"
                          : "text-gray-700 group-hover:text-white"
                      }`}
                    >
                      Explore Resources
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ICON — floats above card top */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-20">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-[#2563EB] text-white group-hover:bg-white group-hover:text-[#2563EB] transition-all duration-500">
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
        <span
          className={`absolute top-30 right-6 w-6 h-6 rounded-[70%_40%_55%_45%] ${
            darkMode ? "bg-[#2563EB]" : "bg-[#2563EB]"
          }`}
        />

        {/* Big middle */}
        <span
          className={`absolute top-40 -right-4 w-10 h-10 rounded-[70%_40%_55%_45%] ${
            darkMode ? "bg-[#2563EB]" : "bg-[#2563EB]"
          }`}
        />

        {/* Medium */}
        <span
          className={`absolute top-56 right-8 w-6 h-6 rounded-[70%_40%_55%_45%] ${
            darkMode ? "bg-[#2563EB]" : "bg-[#2563EB]"
          }`}
        />

        {/* Bottom small */}
        <span
          className={`absolute top-66 right-2 w-4 h-4 rounded-[70%_40%_55%_45%] ${
            darkMode ? "bg-[#2563EB]" : "bg-[#2563EB]"
          }`}
        />
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

      <div className="sm:hidden absolute -left-2 top-70 -translate-y-1/2 z-10">
        <Image
          src="/images/home/red.png"
          alt="left arrow"
          width={32}
          height={32}
          className="w-16 h-10 md:w-20 md:h-18 scale-x-[-1]"
        />
      </div>

      {/* TOP CENTER DECORATIVE IMAGE */}
      <div className="absolute left-70 md:left-1/2 md:-translate-x-1/2 -top-1.75 z-20">
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
