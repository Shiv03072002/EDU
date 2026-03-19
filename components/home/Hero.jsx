"use client";

import React from "react";
import Image from "next/image";
import { Search, Target, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const tags = ["CBSE", "NEET", "JEE", "CUET", "Class 10", "Class 12"];
  const marqueeItems = ["NEET", "JEE", "CUET", "CBSE", "NEET", "JEE", "CUET", "CBSE"];
  const colors = ["#16a34a", "#eb248b", "#ebe826", "#2563eb"];

  return (
    <section className="relative bg-white min-h-screen md:h-182 w-full py-12 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden">

      {/* ── DECORATIVE SHAPES ── */}

      {/* Left big shape — tiny on mobile so it doesn't overlap content */}
      <div className="absolute left-0 bottom-20 w-[60px] sm:w-[80px] md:w-[110px] z-0 opacity-80">
        <Image src="/images/home/left.png" alt="left-shape" width={400} height={100} className="w-full h-auto" priority />
      </div>

      {/* Right big shape — tiny on mobile, pushed to edge */}
      <div className="absolute right-0 bottom-10 sm:top-1/2 sm:-translate-y-1/2 w-[60px] sm:w-[90px] md:w-[140px] z-0 opacity-80">
        <Image src="/images/home/right.png" alt="right-shape" width={200} height={400} className="w-full h-auto" priority />
      </div>

      {/* Star — repositioned to not overlap heading on mobile */}
      <div className="absolute right-[4%] sm:right-[12%] md:right-[20%] top-10 sm:top-14 md:top-24 w-6 sm:w-10 md:w-16 z-10">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
          <Image src="/images/home/Component 107.png" alt="star" width={80} height={80} className="w-full h-auto" />
        </motion.div>
      </div>

      {/* Bulb — hidden on mobile entirely to avoid clutter */}
      <motion.div
        className="hidden md:block absolute left-30 top-28 w-20 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/home/Component 105.png" alt="bulb" width={60} height={60} className="w-full h-auto" />
      </motion.div>

      {/* Green spiral — bottom left, small on mobile */}
      <div className="absolute left-2 sm:left-6 md:left-13 bottom-24 sm:bottom-36 md:bottom-46 w-8 sm:w-12 md:w-32 z-10">
        <Image src="/images/home/Mask group (5).png" alt="green-spiral" width={80} height={80} className="w-full h-auto" />
      </div>

      {/* Red arrow — keep near bottom right on mobile, away from content */}
      <div className="absolute right-4 sm:right-12 md:right-32 bottom-28 sm:bottom-auto sm:top-[50%] md:top-[46%] w-8 sm:w-12 md:w-20 z-10">
        <Image src="/images/home/Mask group (6).png" alt="red-arrow" width={80} height={80} className="w-full h-auto" />
      </div>

      {/* Floating label tags — desktop only */}
      <motion.div
        className="hidden lg:block absolute left-24 z-20"
        style={{ top: "28%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
          <span className="text-sm text-[#0f172a]">NEET Notes</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute left-40 z-20"
        style={{ top: "56%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
          <span className="text-sm text-[#0f172a]">JEE Mock Test</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-24 z-20"
        style={{ top: "28%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
          <span className="text-sm text-[#0f172a]">CBSE Books</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-40 z-20"
        style={{ top: "56%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
          <span className="text-sm text-[#0f172a]">Class 10 Notes</span>
        </div>
      </motion.div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-4xl mx-auto">

        {/* "Find resources for" + marquee pill */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
            <p className="text-[#475569] text-sm sm:text-base">Find resources for</p>
          </div>

          {/* Vertical scrolling pill */}
          <div className="h-8 overflow-hidden w-[72px]">
            <div className="animate-marquee-vertical flex flex-col gap-2">
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: colors[index % colors.length] }}
                  className="rounded px-3 flex items-center justify-center flex-shrink-0 h-8"
                >
                  <span className="text-sm font-bold text-white leading-none">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* H1 */}
        <h1 className="font-['Sora'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0f172a] text-center leading-tight capitalize px-2">
          Find The Best Study Resources For Every Exam
        </h1>

        {/* Subheading */}
        <p className="text-[#475569] text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mt-4 md:mt-6 font-['Inter'] leading-relaxed px-2">
          Access study materials, notes, books, and preparation resources
          for CBSE, NEET, JEE, CUET and more.
        </p>

        {/* ── SEARCH — desktop: inline, mobile: stacked ── */}
        <div className="relative max-w-2xl mx-auto mt-8 md:mt-10 px-0">

          {/* DESKTOP: inline input + button */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search notes, books, mock tests, or exams..."
              className="w-full h-[64px] pl-14 pr-48 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-150">
              Search Resources
            </button>
          </div>

          {/* MOBILE: stacked input then full-width button */}
          <div className="flex flex-col gap-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes, books, mock tests, or exams..."
                className="w-full h-[52px] pl-11 pr-4 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            </div>
            <button className="w-full h-[52px] bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] text-white font-semibold text-base rounded-2xl transition-colors duration-150">
              Search Resources
            </button>
          </div>
        </div>

        {/* Tag pills — hidden on mobile, visible md+ */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mt-6">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-5 py-2 rounded-full text-sm font-medium border border-[#cbd5e1] text-[#334155] bg-white hover:bg-[#f1f5f9] hover:border-[#94a3b8] transition-colors duration-150"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── EXPLORE MORE — bottom ── */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 flex justify-center">
        <div className="relative flex flex-col items-center justify-center">
          {/* Radial gradient circle */}
          <div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full -z-10"
            style={{ background: "linear-gradient(180deg, #2563EB26 0%, #F8FAFC00 20%)" }}
          />
          <motion.div
            className="flex flex-col items-center gap-1.5 sm:gap-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-gray-400 sm:w-8 sm:h-8" />
            <span className="text-sm sm:text-base text-gray-400 font-medium tracking-wide">
              Explore More
            </span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;