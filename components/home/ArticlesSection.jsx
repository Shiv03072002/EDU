"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ArticlesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);

  const articles = [
    {
      tag: "NEET GUIDE",
      date: "MAR 13, 2026",
      title: "How To Prepare For NEET In 6 Months",
    },
    {
      tag: "STUDY TIPS",
      date: "MAR 14, 2026",
      title: "Top Study Strategies To Crack JEE Main",
    },
    {
      tag: "STUDY TIPS",
      date: "MAR 15, 2026",
      title: "How To Build An Effective Daily Study Routine",
    },
    {
      tag: "CBSE GUIDE",
      date: "MAR 15, 2026",
      title: "Best Study Plan For Class 12 Board Exams",
    },
  ];

  const news = [
    {
      title: "Top Study Strategies To Crack JEE Main",
      date: "APR 05, 2026",
    },
    {
      title: "CBSE Releases Updated Exam Pattern For Class 10",
      date: "APR 03, 2026",
    },
    {
      title: "CUET 2026 Registration Process Begins",
      date: "APR 01, 2026",
    },
  ];

  const checkerStyle = (size = 16) => ({
    backgroundImage: `
      linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
      linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
      linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)
    `,
    backgroundSize: `${size}px ${size}px`,
    backgroundPosition: `0 0, 0 ${size / 2}px, ${size / 2}px -${size / 2}px, -${size / 2}px 0px`,
    backgroundColor: "#f0f0f0",
  });

  const prev = () =>
    setCurrentSlide((s) => (s - 1 + articles.length) % articles.length);
  const next = () => setCurrentSlide((s) => (s + 1) % articles.length);

  return (
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden">
      <div className="  absolute -left-5 lg:-left-16 top-2 md:top-2 w-10 md:w-30 z-10">
        <motion.div>
          <Image
            src="/images/home/Component107.png"
            alt="star"
            width={80}
            height={80}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

     {/* Mobile version - smaller size */}
<motion.div
  className="absolute opacity-60 block lg:hidden"
  style={{
    top: "1rem",
    right: "10%",
  }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <div
    className="w-0 h-0"
    style={{
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "14px solid #d1d5db",
    }}
  />
</motion.div>

{/* Desktop version - original size and position */}
<motion.div
  className="absolute top-16 right-[50%] opacity-60 hidden lg:block"
  animate={{ rotate: 360 }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <div
    className="w-0 h-0"
    style={{
      borderLeft: "20px solid transparent",
      borderRight: "20px solid transparent",
      borderBottom: "32px solid #d1d5db",
    }}
  />
</motion.div>
      {/* 3x2 dots under the triangle */}
      <div className="grid absolute top-14 md:top-40 right-10 md:right-[49%]  grid-cols-3 gap-3 lg:gap-5 opacity-40">
        {[...Array(6)].map((_, i) => (
          <div key={i} className=" w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full" />
        ))}
      </div>

      {/* Green dots + arrow bottom right */}
      <div className="hidden lg:grid absolute -right-0.75 top-[70%] grid-cols-3 gap-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-green-500 rounded-full" />
        ))}
      </div>
      <motion.div
        className="hidden lg:block absolute right-18 top-[70%] w-0 h-0
   border-t-[18px] border-t-transparent
  border-b-[18px] border-b-transparent
  border-r-[32px] border-r-green-500"
        animate={{ y: [0, 60, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom decorative images */}
      <div className="hidden lg:block absolute bottom-34 right-66 w-50 h-30">
        <img
          src="/images/articles/Hands.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-80 h-44">
        <img
          src="/images/articles/element.png"
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* ── DESKTOP lg+ ── */}
        <div className="hidden lg:block">
          {/* Header row: title left (~55%), description right (~45% aligned to news) */}
          <div className="flex items-center mb-10">
            {/* Left ~55% */}
            <div style={{ width: "55%" }}>
              <span className="inline-block text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold mb-4">
                LATEST ARTICLES
              </span>
              <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight max-w-md">
                Helpful Guides To Boost Your Exam Preparation
              </h2>
            </div>
            {/* Right ~45% — description sits top-right aligned with news column */}
            <div className="pt-2 pl-8">
              <p className="text-gray-500 text-md leading-relaxed max-w-lg">
                Explore study strategies, exam preparation tips, and helpful
                guides designed to support your learning journey.
              </p>
            </div>
          </div>

          {/* Content row: articles left (~55%), news right (~45%) */}
          <div className="flex items-start gap-0">
            {/* LEFT — 2×2 articles, tall images */}
            <div style={{ width: "55%" }} className="pr-8">
              <div className="grid grid-cols-2 gap-5">
                {articles.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div
                      className="w-full rounded-xl"
                      style={{ ...checkerStyle(16), height: "230px" }}
                    />
                    <div className="mt-3 text-xs text-gray-400 flex items-center gap-2">
                      <span className="font-semibold text-gray-500 uppercase tracking-wide">
                        {item.tag}
                      </span>
                      <span className="text-gray-300 font-bold">•</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="mt-1.5 font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base xl:text-lg leading-snug">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Latest News */}
            <div style={{ width: "45%" }} className="pl-8 ">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Latest News
              </h3>
              <div className="space-y-6">
                {news.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start group cursor-pointer"
                  >
                    {/* Wider thumbnail matching Figma */}
                    <div
                      className="rounded-lg flex-shrink-0"
                      style={{
                        ...checkerStyle(10),
                        width: "100px",
                        height: "90px",
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs text-gray-400 mb-1.5 font-semibold tracking-widest flex items-center gap-2 uppercase">
                        <span>Exam Update</span>
                        <span className="text-gray-300 font-bold">•</span>
                        <span>{item.date}</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug max-w-sm">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TABLET md ── */}
        <div className="hidden md:block lg:hidden">
          <div className="mb-8">
            <span className="inline-block text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold mb-3">
              LATEST ARTICLES
            </span>
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight max-w-xs">
                Helpful Guides To Boost Your Exam Preparation
              </h2>
              <p className="text-gray-500 text-sm max-w-xs pt-1">
                Explore study strategies, exam preparation tips, and helpful
                guides designed to support your learning journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-10">
            {articles.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  className="w-full h-44 rounded-xl"
                  style={checkerStyle(16)}
                />
                <div className="mt-3 text-xs text-gray-400 flex items-center gap-2">
                  <span className="font-semibold text-gray-500 uppercase">
                    {item.tag}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-1.5 font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-5 text-gray-900">Latest News</h3>
          <div className="space-y-4">
            {news.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div
                  className="w-24 h-16 rounded-lg flex-shrink-0"
                  style={checkerStyle(10)}
                />
                <div>
                  <div className="text-xs text-gray-400 mb-1 font-semibold tracking-widest uppercase flex items-center gap-2">
                    <span>Exam Update</span>
                    <span className="text-gray-300">•</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="block md:hidden">
          {/* Header */}
          <div className="mb-7">
            <span className="inline-block text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold mb-3">
              LATEST ARTICLES
            </span>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
              Helpful Guides To Boost Your Exam Preparation
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Explore study strategies, exam preparation tips, and helpful
              guides designed to support your learning journey.
            </p>
          </div>

          {/* Article carousel */}
          <div>
            <div className="relative rounded-xl ">
              <div className="w-full h-56" style={checkerStyle(16)} />
              <button
                onClick={prev}
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-blue-600  flex items-center justify-center text-blue-600"
              >
                <ChevronLeft className="w-4 h-4 text-blue-600" />
              </button>
              <button
                onClick={next}
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-blue-600 shadow-md flex items-center justify-center text-blue-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 text-xs text-gray-400 flex items-center gap-2">
              <span className="font-semibold text-gray-500 uppercase">
                {articles[currentSlide].tag}
              </span>
              <span className="text-gray-300">•</span>
              <span>{articles[currentSlide].date}</span>
            </div>
            <h3 className="mt-1.5 font-bold text-gray-900 text-base leading-snug">
              {articles[currentSlide].title}
            </h3>
          </div>

          {/* News carousel */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Latest News
            </h3>
            <div className="flex gap-3 items-start">
              <div
                className="w-24 h-20 rounded flex-shrink-0"
                style={checkerStyle(10)}
              />
              <div>
                <div className="text-xs text-gray-400 mb-3 font-semibold tracking-widest uppercase flex items-center gap-2">
                  <span>Exam Update</span>
                  <span className="text-gray-300">•</span>
                  <span>{news[currentNews].date}</span>
                </div>
                <p className="text-md font-bold text-gray-900 leading-snug">
                  {news[currentNews].title}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {news.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentNews(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentNews
                      ? "w-4 h-2 bg-blue-600"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
