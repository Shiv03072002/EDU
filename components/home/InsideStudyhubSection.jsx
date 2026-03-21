"use client";

import { Search, BookOpen, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function StudyResources() {
  const { darkMode } = useTheme();
  const cards = [
    {
      title: "Study Notes",
      desc: "Clear and easy-to-understand notes for different subjects and exams to help you revise important concepts quickly.",
      highlight: true,
    },
    {
      title: "Mock Tests",
      desc: "Practice full-length mock tests and quizzes to test your knowledge and improve your exam performance.",
    },
    {
      title: "Question Papers",
      desc: "Solve previous year question papers and sample papers to understand exam patterns and important topics.",
    },
    {
      title: "Study Guides",
      desc: "Helpful guides and preparation strategies to plan your studies and prepare effectively for exams.",
    },
  ];

  const steps = [
    { name: "Discover", icon: Search, delay: 0 },
    { name: "Prepare", icon: BookOpen, delay: 0.5 },
    { name: "Practice", icon: FileText, delay: 1 },
  ];

  // Mobile step circles - no animation
  const MobileStepCircles = () => (
    <div className="flex items-center justify-center gap-8 sm:gap-16 md:gap-20 mt-10 md:mt-20">
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-white" : "bg-white"
                  }`}
                >
                  <IconComponent size={14} className="text-[#2563EB]" />
                </div>
              </div>
              <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                {step.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // Desktop step circles - with animation
  const DesktopStepCircles = () => (
    <div className="flex items-center gap-20 mt-20">
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            animate={{ y: [20, 0, -40, 0, 20] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1],
              delay: step.delay,
            }}
          >
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-white" : "bg-white"
                  }`}
                >
                  <IconComponent size={14} className="text-[#2563EB]" />
                </div>
              </div>
              <div className="w-28 h-28 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                {step.name}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section
      className={`py-12 md:py-20 px-4 sm:px-6 md:px-10 ${
        darkMode ? "bg-[#111111]" : "bg-[#F8FAFC]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── MOBILE & TABLET (< lg): stacked layout ── */}
        <div className="lg:hidden">
          {/* Header */}
          <p
            className={`rounded-full text-xs font-semibold mb-3 uppercase tracking-wider inline-block px-4 py-2 ${
              darkMode
                ? "bg-blue-950/50 text-blue-400 border border-blue-900/50"
                : "bg-blue-100 text-[#2563EB]"
            }`}
          >
            Inside Studyhub
          </p>
          <h2
            className={`text-2xl sm:text-3xl font-bold leading-tight mb-3 max-w-sm ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Study Smarter With The Right Resources
          </h2>
          <p
            className={`text-sm sm:text-base max-w-lg mb-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore different types of study materials available on our platform
            to help you prepare better for school and competitive exams.
          </p>

          {/* Cards — single column on mobile, 2-col on sm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`relative px-5 py-8 rounded-xl ${
                  card.highlight
                    ? "bg-[#2563EB] text-white"
                    : darkMode
                      ? "bg-[#1A1A1A] text-gray-200 border border-gray-800"
                      : "bg-white text-gray-800 border border-gray-100"
                }`}
              >
                <h3
                  className={`font-bold text-lg mb-2 ${
                    card.highlight
                      ? "text-white"
                      : darkMode
                        ? "text-white"
                        : "text-gray-900"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    card.highlight
                      ? "text-blue-100"
                      : darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Step circles below cards on mobile - NO ANIMATION */}
          <MobileStepCircles />
        </div>

        {/* ── DESKTOP (lg+): side-by-side layout ── */}
        <div className="hidden lg:grid lg:grid-cols-2 items-start gap-4">
          {/* LEFT */}
          <div className="justify-self-start">
            <p
              className={`rounded-full text-sm font-semibold mb-4 uppercase tracking-wider inline-block px-4 py-1 ${
                darkMode
                  ? "bg-blue-950/50 text-blue-400 border border-blue-900/50"
                  : "bg-blue-100 text-[#2563EB]"
              }`}
            >
              Inside Studyhub
            </p>
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-xl ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Study Smarter With the Right Resources
            </h2>
            <p
              className={`text-md max-w-lg mb-12 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Explore different types of study materials available on our
              platform to help you prepare better for school and competitive
              exams.
            </p>

            {/* Desktop step circles - WITH ANIMATION */}
            <DesktopStepCircles />
          </div>

          {/* RIGHT — 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="relative  ">
                {i === 1 && (
                  <div
                    className={`absolute -right-14 -top-10 w-24 h-24 rounded-full border-4 border-dotted z-0 ${
                      darkMode ? "border-gray-700" : "border-gray-300"
                    }`}
                  />
                )}
                <div
                  className={`px-6 py-6 rounded-md relative z-10 ${
                    card.highlight
                      ? "bg-[#2563EB] text-white border border-blue-500"
                      : darkMode
                        ? "bg-[#1A1A1A] text-gray-200 border border-gray-700"
                        : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <h3
                    className={`font-bold text-xl ${
                      card.highlight
                        ? "text-white"
                        : darkMode
                          ? "text-white"
                          : ""
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      card.highlight
                        ? "text-blue-100"
                        : darkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
