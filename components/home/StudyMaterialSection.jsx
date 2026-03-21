"use client";

import { FileText, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
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
    category: "CBSE",
  },
  {
    title: "CBSE Sample Papers",
    desc: "Practice with the CBSE sample question papers. Understand the concepts and improve your confidence before exams.",
    category: "CBSE",
  },
  {
    title: "CBSE Question Banks",
    desc: "Important questions collected from previous exams and textbooks. Useful for practicing and preparing for CBSE exams.",
    category: "CBSE",
  },
  {
    title: "NEET Mock Tests",
    desc: "Important questions collected from previous exams and textbooks. Useful for practicing and preparing for NEET exams.",
    category: "NEET",
  },
  {
    title: "NCERT Books",
    desc: "Access NCERT textbooks for different classes and subjects. Helpful for building strong basics and preparing for school exams.",
    category: "All",
  },
  {
    title: "Class 10 Previous Papers",
    desc: "Practice previous year question papers for Class 10 exams. Understand important topics and improve exam preparation.",
    category: "10th Class",
  },
  {
    title: "NEET Biology Notes",
    desc: "Easy-to-understand biology notes based on NCERT topics. Great for quick revision and NEET exam preparation.",
    category: "NEET",
  },
  {
    title: "NEET Previous Papers",
    desc: "Solve NEET previous year question papers to understand the exam difficulty and improve problem-solving skills.",
    category: "NEET",
  },
  {
    title: "JEE Physics Formulae",
    desc: "Quick reference list of important physics formulas for JEE. Helps you revise key concepts and solve problems faster.",
    category: "JEE",
  },
  {
    title: "JEE Main Mock Tests",
    desc: "Practice JEE Main mock tests in a real exam-style format. Improve speed, accuracy, and exam readiness.",
    category: "JEE",
  },
  {
    title: "CUET Prep Material",
    desc: "Study notes, practice questions, and guides for CUET exams. Helpful resources to prepare for university entrance tests.",
    category: "CUET",
  },
  {
    title: "Class 12 Study Guides",
    desc: "Simple study guides and important notes for Class 12 subjects. Great for quick revision and better exam preparation.",
    category: "12th Class",
  },
];

const getCards = (filter) => {
  if (filter === "All") return cards;
  return cards.filter((c) => c.category === filter);
};

function AccordionItem({ filter, isOpen, onToggle }) {
  const [showAll, setShowAll] = useState(false);
  const items = getCards(filter);
  const visible = showAll ? items : items.slice(0, 6);

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-4 py-3.5 font-semibold text-sm transition-colors duration-200 ${
          isOpen ? "bg-blue-600 text-white" : "bg-white text-gray-800"
        }`}
      >
        <span>{filter}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="p-3 bg-white border-t border-gray-100">
          {items.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">
              No resources yet.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3">
                {visible.map((card, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-start gap-2 p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-500 transition-all duration-200">
                      <FileText className="w-4 h-4 text-gray-500 group-hover:text-white transition-all duration-200" />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 leading-snug">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>

              {!showAll && items.length > 6 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="w-full mt-3 py-2.5 rounded-xl border border-blue-300 text-blue-600 text-sm font-medium hover:bg-blue-50 transition-colors duration-200"
                >
                  Load More
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function ResourcesSection() {
  const [active, setActive] = useState("All");
  const [openAccordion, setOpenAccordion] = useState("All");

  const toggle = (filter) => {
    setOpenAccordion((prev) => (prev === filter ? "" : filter));
  };

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-[#f8fafc] overflow-hidden">
      {/* Decorative images — desktop only */}
      <motion.img
        src="/images/resources/arrow.png"
        alt="arrow"
        className="hidden md:block absolute left-24 top-28 w-24 object-contain"
        animate={{ rotate: [10, -10] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />
      <img
        src="/images/resources/pencil.png"
        alt="pencil"
        className=" absolute right-8 lg:right-12 top-6 lg:top-56 -translate-y-1/2 w-14 md:w-32 object-contain"
      />
      <img
        src="/images/resources/dots.png"
        alt="dots"
        className=" absolute right-0 top-4 lg:-right-1 lg:top-56 w-12 md:w-20 object-contain"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:text-center mb-6 md:mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-3 md:mb-4 border border-blue-200">
            DISCOVER RESOURCES
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-gray-900 mb-3 md:mb-4 leading-tight px-2">
            All The Study Resources You Need In One Place
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Explore curated notes, NCERT books, mock tests, question papers, and
            exam preparation guides for classes, boards, and competitive exams
            like NEET, JEE, and CUET.
          </p>
        </div>

        {/* ── MOBILE: Accordion ── */}
        <div className="md:hidden space-y-2 mt-6">
          {filters.map((filter) => (
            <AccordionItem
              key={filter}
              filter={filter}
              isOpen={openAccordion === filter}
              onToggle={() => toggle(filter)}
            />
          ))}
        </div>

        {/* ── DESKTOP: Pills + grid ── */}
        <div className="hidden md:block">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  active === item
                    ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                    : "text-gray-700 border-gray-300 hover:border-gray-400 bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

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
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
