"use client";

import { Search, BookOpen, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function StudyResources() {
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
    {
      name: "Discover",
      icon: Search,
      delay: 0,
    },
    {
      name: "Prepare",
      icon: BookOpen,
      delay: 0.5,
    },
    {
      name: "Practice",
      icon: FileText,
      delay: 1,
    },
  ];

  return (
    <section className="bg-[#F1F5F9] py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-start gap-12">
        {/* LEFT - Left aligned */}
        <div className="justify-self-start">
          <p className="text-blue-600 bg-blue-100 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider inline-block px-4 py-1">
            Inside Studyhub
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 max-w-xl">
            Study Smarter With the Right Resources
          </h2>

          <p className="text-gray-600 text-md max-w-lg mb-12">
            Explore different types of study materials available on our platform
            to help you prepare better for school and competitive exams.
          </p>

          {/* Steps with deeper animation */}
          <div className="flex items-center gap-20 mt-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  animate={{
                    y: [20, 0, -40, 0, 20],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: step.delay,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative">
                    {/* Icon in small circle above */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <IconComponent size={14} className="text-blue-600" />
                      </div>
                    </div>
                    {/* Main circle with text */}
                    <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                      {step.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT - Rectangular cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="relative">
              {/* Dotted circle for Mock Tests card (index 1) - with solid border for testing */}
              {i === 1 && (
                <>
                  {/* Semi-transparent background to see if circle is there */}
                  <div className="absolute -right-14 -top-10 w-24 h-24 rounded-full border-4 border-dotted border-gray-300 bg-transparent z-0"></div>
                </>
              )}

              {/* Card */}
              <div
                className={`px-6 py-6 rounded-xl relative z-10 ${
                  card.highlight
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <h3 className="font-bold text-xl ">{card.title}</h3>
                <p
                  className={`text-base leading-relaxed max-w-120 ${
                    card.highlight ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
