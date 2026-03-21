"use client";

import { FileText, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

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

function AccordionItem({ filter, isOpen, onToggle, darkMode }) {
  const [showAll, setShowAll] = useState(false);
  const items = getCards(filter);
  const visible = showAll ? items : items.slice(0, 6);

  return (
    <div className={`rounded-xl overflow-hidden border ${
      darkMode ? "border-gray-800 bg-[#1A1A1A]" : "border-gray-200 bg-white"
    }`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-4 py-3.5 font-semibold text-sm transition-colors duration-200 ${
          isOpen 
            ? "bg-blue-600 text-white" 
            : darkMode 
              ? "bg-[#1A1A1A] text-gray-200" 
              : "bg-white text-gray-800"
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
        <div className={`p-3 ${darkMode ? "bg-[#1A1A1A]" : "bg-white"} border-t ${
          darkMode ? "border-gray-800" : "border-gray-100"
        }`}>
          {items.length === 0 ? (
            <p className={`text-sm text-center py-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              No resources yet.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3">
                {visible.map((card, i) => (
                  <div
                    key={i}
                    className={`group flex flex-col items-start gap-2 p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                      darkMode
                        ? "border-gray-800 hover:border-blue-700 hover:bg-blue-950/30"
                        : "border-gray-100 hover:border-blue-200 hover:bg-blue-50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-all duration-200 ${
                      darkMode
                        ? "bg-gray-800 group-hover:bg-blue-600"
                        : "bg-gray-100 group-hover:bg-blue-500"
                    }`}>
                      <FileText className={`w-4 h-4 transition-all duration-200 ${
                        darkMode
                          ? "text-gray-400 group-hover:text-white"
                          : "text-gray-500 group-hover:text-white"
                      }`} />
                    </div>
                    <p className={`text-xs font-semibold leading-snug mt-4  ${
                      darkMode ? "text-gray-300" : "text-gray-800"
                    }`}>
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>

              {!showAll && items.length > 6 && (
                <button
                  onClick={() => setShowAll(true)}
                  className={`w-full mt-3 py-2.5 rounded-md border text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? " bg-white text-gray-800 hover:bg-blue-950/50"
                      : "border-blue-300 text-blue-600 hover:bg-blue-50"
                  }`}
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
  const { darkMode } = useTheme();
  const [active, setActive] = useState("All");
  const [openAccordion, setOpenAccordion] = useState("All");

  const toggle = (filter) => {
    setOpenAccordion((prev) => (prev === filter ? "" : filter));
  };

  return (
    <section className={`relative py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden ${
      darkMode ? "bg-[#0A0A0A]" : "bg-[#f8fafc]"
    }`}>
      {/* Decorative images — desktop only */}
      <motion.img
        src="/images/resources/arrow.png"
        alt="arrow"
        className="hidden md:block absolute left-24 top-28 w-24 object-contain "
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
        className="absolute right-8 lg:right-12 top-6 lg:top-56 -translate-y-1/2 w-14 md:w-32 object-contain opacity-100"
      />
      <img
        src="/images/resources/dots.png"
        alt="dots"
        className="absolute right-0 top-4 lg:-right-1 lg:top-56 w-12 md:w-20 object-contain "
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:text-center mb-6 md:mb-8">
          <div className={`inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 md:mb-4 ${
            darkMode
              ? "bg-blue-950/50 text-blue-400"
              : "bg-blue-100 text-blue-600"
          }`}>
            DISCOVER RESOURCES
          </div>
          <h1 className={`text-2xl sm:text-3xl md:text-[42px] font-bold mb-3 md:mb-4 leading-tight px-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            All The Study Resources You Need In One Place
          </h1>
          <p className={`text-sm sm:text-base max-w-3xl mx-auto ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
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
              darkMode={darkMode}
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
                    : darkMode
                      ? "text-gray-300 border-gray-700 hover:border-gray-600 bg-[#1A1A1A] hover:bg-gray-800"
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
                className={`group border rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer ${
                  darkMode
                    ? "bg-[#1A1A1A] border-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-blue-900/20"
                    : "bg-white border-gray-200 hover:shadow-lg hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800 border border-gray-700 group-hover:bg-blue-600 group-hover:border-blue-500"
                      : "bg-gray-100 border border-gray-200 group-hover:bg-blue-500 group-hover:border-blue-600"
                  }`}>
                    <FileText className={`w-5 h-5 transition-all duration-300 ${
                      darkMode
                        ? "text-gray-400 group-hover:text-white"
                        : "text-gray-600 group-hover:text-white"
                    }`} />
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                    darkMode
                      ? "text-gray-600 group-hover:text-blue-400 group-hover:rotate-45"
                      : "text-gray-400 group-hover:text-blue-600 group-hover:rotate-45"
                  }`} />
                </div>
                <h3 className={`font-semibold text-lg mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
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