"use client";

import { FileText, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const filters = [
  "All",
  "CBSE",
  "NEET",
  "JEE",
  "CUET",
  "State Boards",
  "12th Class",
  "11th Class",
  "10th Class",
];

const cards = [
  {
    title: "CBSE Notes",
    desc: "Clear and simple chapter-wise notes for CBSE subjects. Perfect for better understanding of important concepts.",
    img: "/images/cards/cbse-notes.png",
  },
  {
    title: "CBSE Sample Papers",
    desc: "Practice with the CBSE sample question papers. Understand the concepts and improve your confidence before exams.",
    img: "/images/cards/sample-papers.png",
  },
  {
    title: "CBSE Question Banks",
    desc: "Important questions collected from previous exams and textbooks. Useful for practicing and preparing for CBSE exams.",
    img: "/images/cards/question-bank.png",
  },
  {
    title: "NEET Mock Tests",
    desc: "Important questions collected from previous exams and textbooks. Useful for practicing and preparing for NEET exams.",
    img: "/images/cards/neet-mock.png",
  },
  {
    title: "NCERT Books",
    desc: "Access NCERT textbooks for different classes and subjects. Helpful for building strong basics and preparing for school exams.",
    img: "/images/cards/ncert.png",
  },
  {
    title: "Class 10 Previous Papers",
    desc: "Practice previous year question papers for Class 10 exams. Understand important topics and improve exam preparation.",
    img: "/images/cards/class10.png",
  },
  {
    title: "NEET Biology Notes",
    desc: "Easy-to-understand biology notes based on NCERT topics. Great for quick revision and NEET exam preparation.",
    img: "/images/cards/biology.png",
  },
  {
    title: "NEET Previous Papers",
    desc: "Solve NEET previous year question papers to understand the exam difficulty and improve problem-solving skills.",
    img: "/images/cards/neet-paper.png",
  },

  // ✅ THESE WERE MISSING
  {
    title: "JEE Physics Formulae",
    desc: "Quick reference list of important physics formulas for JEE. Helps you revise key concepts and solve problems faster.",
    img: "/images/cards/jee-physics.png",
  },
  {
    title: "JEE Main Mock Tests",
    desc: "Practice JEE Main mock tests in a real exam-style format. Improve speed, accuracy, and exam readiness.",
    img: "/images/cards/jee-mock.png",
  },
  {
    title: "CUET Prep Material",
    desc: "Study notes, practice questions, and guides for CUET exams. Helpful resources to prepare for university entrance tests.",
    img: "/images/cards/cuet.png",
  },
  {
    title: "Class 12 Study Guides",
    desc: "Simple study guides and important notes for Class 12 subjects. Great for quick revision and better exam preparation.",
    img: "/images/cards/class12.png",
  },
];

export default function ResourcesSection() {
  const [active, setActive] = useState("All");

  return (
    <section className="relative py-16 px-4 md:px-10 bg-[#f8fafc] overflow-hidden">

      <img
  src="/images/resources/arrow.png"   // your red arrow image
  alt="arrow"
  className="hidden md:block absolute left-12 top-28 w-20 object-contain"
/>
      
      {/* ✅ RIGHT SIDE PENCIL */}
      <img
        src="/images/resources/pencil.png"
        alt="pencil"
        className="hidden md:block absolute right-12 top-56 -translate-y-1/2 w-32 object-contain"
      />

      {/* ✅ BLUE DOTS IMAGE */}
      <img
        src="/images/resources/dots.png"
        alt="dots"
        className="hidden md:block absolute -right-1 top-56 w-20 object-contain"
      />

      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4 border border-blue-200">
          DISCOVER RESOURCES
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-4">
          All The Study Resources You Need In One Place
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Explore curated notes, NCERT books, mock tests, question papers, and
          exam preparation guides for classes, boards, and competitive exams like
          NEET, JEE, and CUET.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === item
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  : " text-gray-700 border-gray-300 hover:border-gray-400 bg-gray-100 "
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {cards.map((card, index) => (
    <div
      key={index}
      className="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-gray-100 border border-gray-200 rounded-lg group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
          <FileText className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300" />
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:rotate-45 transition-all duration-300" />
      </div>

      <h3 className="font-semibold text-lg text-gray-900 mb-2  transition-colors duration-300">
        {card.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}