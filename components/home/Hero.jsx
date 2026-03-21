"use client";

import React from "react";
import Image from "next/image";
import { Search, Target, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const HeroSection = () => {
  const { darkMode } = useTheme();
  const tags = ["CBSE", "NEET", "JEE", "CUET", "Class 10", "Class 12"];
  const marqueeItems = [
    "NEET",
    "JEE",
    "CUET",
    "CBSE",
    "NEET",
    "JEE",
    "CUET",
    "CBSE",
  ];
  const colors = ["#16a34a", "#eb248b", "#ebe826", "#2563eb"];

  return (
    <section className={`relative w-full h-174 md:h-182 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden ${
      darkMode ? "bg-[#0A0A0A]" : "bg-white"
    }`}>
      {/* ─── DECORATIVE SHAPES ─── */}

      {/* LEFT blue shape — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute left-0 bottom-20 w-[110px] z-0">
        <Image
          src="/images/home/left.png"
          alt="left-shape"
          width={400}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* RIGHT blue shape — hidden on mobile, visible md+ centered vertically */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[140px] z-0">
        <Image
          src="/images/home/right.png"
          alt="right-shape"
          width={200}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* STAR — mobile: small top-right, desktop: larger */}
      <div className=" absolute right-[6%] md:right-[25%] top-13 md:top-16 w-10 md:w-20 z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/home/Component107.png"
            alt="star"
            width={80}
            height={80}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* BULB — mobile: small inline-ish top-left, desktop: floating */}
      <motion.div
        className="absolute left-[6%] md:left-30 top-12 md:top-28 w-10 md:w-20 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/home/Component105.png"
          alt="bulb"
          width={60}
          height={60}
          className="w-full h-auto"
        />
      </motion.div>

      {/* GREEN SPIRAL — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute left-14 bottom-46 w-32 z-10">
        <Image
          src="/images/home/green.png"
          alt="green-spiral"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* RED ARROW — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute right-33 top-[46%] w-20 z-10">
        <Image
          src="/images/home/red.png"
          alt="red-arrow"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only green spiral — bottom-left, well below search */}
      <div className="block md:hidden absolute left-9 bottom-36 w-18 z-10">
        <Image
          src="/images/home/green.png"
          alt="green-spiral"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only red arrow — bottom-right, well below search */}
      <div className="block md:hidden absolute right-23 bottom-40 w-16 z-10">
        <Image
          src="/images/home/red.png"
          alt="red-arrow"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only right blue blob — strictly bottom-right corner */}
      <div className="block md:hidden absolute right-0 bottom-28 w-[100px] z-0">
        <Image
          src="/images/home/right.png"
          alt="right-shape"
          width={200}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only left blue blob — strictly bottom-left corner */}
      <div className="block md:hidden absolute left-0 bottom-20 w-[90px] z-0">
        <Image
          src="/images/home/left.png"
          alt="left-shape"
          width={400}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* ─── FLOATING LABEL TAGS — lg+ only ─── */}
      <motion.div
        className="hidden lg:block absolute left-24 z-20"
        style={{ top: "28%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`border rounded px-5 py-3 ${
          darkMode 
            ? "bg-[#1A1A1A] border-gray-700" 
            : "bg-white border-[#e2e8f0]"
        }`}>
          <span className={`text-sm ${darkMode ? "text-gray-300" : "text-[#0f172a]"}`}>
            NEET Notes
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute left-40 z-20"
        style={{ top: "56%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`border rounded px-5 py-3 ${
          darkMode 
            ? "bg-[#1A1A1A] border-gray-700" 
            : "bg-white border-[#e2e8f0]"
        }`}>
          <span className={`text-sm ${darkMode ? "text-gray-300" : "text-[#0f172a]"}`}>
            JEE Mock Test
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-24 z-20"
        style={{ top: "28%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`border rounded px-5 py-3 ${
          darkMode 
            ? "bg-[#1A1A1A] border-gray-700" 
            : "bg-white border-[#e2e8f0]"
        }`}>
          <span className={`text-sm ${darkMode ? "text-gray-300" : "text-[#0f172a]"}`}>
            CBSE Books
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-40 z-20"
        style={{ top: "56%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`border rounded px-5 py-3 ${
          darkMode 
            ? "bg-[#1A1A1A] border-gray-700" 
            : "bg-white border-[#e2e8f0]"
        }`}>
          <span className={`text-sm ${darkMode ? "text-gray-300" : "text-[#0f172a]"}`}>
            Class 10 Notes
          </span>
        </div>
      </motion.div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-20 max-w-4xl mx-auto pt-10 md:pt-0">
        {/* "Find resources for" + vertical marquee */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 md:mb-12">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
            <p className={`text-sm sm:text-base ${darkMode ? "text-gray-400" : "text-[#475569]"}`}>
              Find resources for
            </p>
          </div>
          <div className="h-8 overflow-hidden w-[72px]">
            <div className="animate-marquee-vertical flex flex-col gap-2">
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: colors[index % colors.length] }}
                  className="rounded px-3 flex items-center justify-center flex-shrink-0 h-8"
                >
                  <span className="text-sm font-bold text-white leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* H1 */}
        <h1 className={`font-['Sora'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight capitalize px-2 ${
          darkMode ? "text-white" : "text-[#0f172a]"
        }`}>
          Find The Best Study Resources For Every Exam
        </h1>

        {/* Subheading */}
        <p className={`text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mt-4 md:mt-6 font-['Inter'] leading-relaxed px-2 ${
          darkMode ? "text-gray-400" : "text-[#475569]"
        }`}>
          Access study materials, notes, books, and preparation resources for
          CBSE, NEET, JEE, CUET and more.
        </p>

        {/* ── SEARCH ── */}
        <div className="relative max-w-2xl mx-auto mt-8 md:mt-10">
          {/* DESKTOP: inline */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search notes, books, mock tests, or exams..."
              className={`w-full h-[64px] pl-14 pr-48 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent ${
                darkMode
                  ? "bg-[#1A1A1A] border-gray-700 text-gray-300 placeholder:text-gray-500"
                  : "bg-[#f8fafc] border-[#e2e8f0] text-[#64748b]"
              }`}
            />
            <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${
              darkMode ? "text-gray-500" : "text-[#94a3b8]"
            }`} />

            {/* Button with left-to-right hover animation */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white font-semibold text-sm px-6 py-3 rounded-md transition-all duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-[#1d4ed8] transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="absolute inset-0 bg-[#2563eb] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
              <span className="relative z-10">Search Resources</span>
            </button>
          </div>

          {/* MOBILE: stacked */}
          <div className="flex flex-col gap-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes, books, mock tests, or exams..."
                className={`w-full h-[44px] pl-11 pr-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent ${
                  darkMode
                    ? "bg-[#1A1A1A] border-gray-700 text-gray-300 placeholder:text-gray-500"
                    : "bg-white border-[#e2e8f0] text-[#64748b]"
                }`}
              />
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${
                darkMode ? "text-gray-500" : "text-[#94a3b8]"
              }`} />
            </div>
            <div className="flex justify-center">
              <button className="inline-flex w-fit shrink-0 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-6 py-3 rounded-md whitespace-nowrap">
                Search Resources
              </button>
            </div>
          </div>
        </div>

        {/* Tag pills — hidden on mobile */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mt-6">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-150 ${
                darkMode
                  ? "border-gray-700 text-gray-300 bg-[#1A1A1A] hover:bg-gray-800 hover:border-blue-600"
                  : "border-[#cbd5e1] text-[#334155] bg-white hover:bg-[#f1f5f9] hover:border-[#94a3b8]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── EXPLORE MORE ── */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 flex justify-center">
        <div className="relative flex flex-col items-center justify-center">
          {/* Circle - positioned to not overlap with search */}
          <div
  className="absolute -top-14 lg:-top-12 left-1/2 -translate-x-1/2 w-200 h-300 sm:w-[500px] md:w-[800px] sm:h-[500px] md:h-[800px] rounded-full -z-10"
  style={{
    background: darkMode
      ? "linear-gradient(180deg, #2563EBD9 2%, #11111100 17%)"
      : "linear-gradient(180deg, #2563EB26 0%, #F8FAFC00 20%)",
  }}
/>
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className={`md:w-8 md:h-8 ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`} />
            <span className={`text-sm md:text-base font-medium tracking-wide ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}>
              Explore More
            </span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;