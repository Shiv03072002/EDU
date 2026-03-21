"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const promotionTypes = [
  "Course Promotion",
  "Study Material",
  "Mock Tests",
  "Live Classes",
  "Question Bank",
  "Other",
];

export default function PromoteSection() {
  const { darkMode } = useTheme();
  const [form, setForm] = useState({
    platformName: "",
    websiteURL: "",
    contactEmail: "",
    promotionType: "",
    targetExams: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Promotion request submitted!");
  };

  return (
    <section className={`relative w-full overflow-hidden py-14 px-6 md:px-12 lg:px-20 ${
      darkMode ? "bg-[#111111]" : "bg-[#f8f9fb]"
    }`}>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
        {/* ── LEFT COLUMN (50%) – HIDDEN ON MOBILE ── */}
        <div className="hidden lg:flex flex-col gap-6">
          {/* Badge */}
          <div className="w-fit">
            <p className={`text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full whitespace-nowrap ${
              darkMode
                ? "bg-blue-950/50 text-blue-400"
                : "bg-blue-100 text-blue-600"
            }`}>
              Partner With Us
            </p>
          </div>

          {/* Heading */}
          <h2 className={`font-black text-[2.6rem] leading-[1.15] max-w-lg ${
            darkMode ? "text-white" : "text-gray-950"
          }`}>
            Promote Your Learning Platform To Thousands Of Students
          </h2>

          {/* Image Grid */}
          <div className="relative mt-2">
            <div className="grid grid-cols-2 gap-6">
              {/* Large left image */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "520px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=85"
                  alt="Student with laptop"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Right column — two stacked images */}
              <div className="flex flex-col gap-3">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85"
                    alt="Student studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=85"
                    alt="Students collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Play button */}
            <button 
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center z-50 ${
                darkMode ? "bg-[#1A1A1A]" : "bg-white"
              }`}
              aria-label="Play video"
            >
              <motion.svg
                className="w-5 h-5 text-blue-600 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear"
                }}
              >
                <path d="M6 4.75v14.5a.75.75 0 0 0 1.148.634l11-7.25a.75.75 0 0 0 0-1.268l-11-7.25A.75.75 0 0 0 6 4.75z" />
              </motion.svg>
            </button>

            {/* Top Right Image */}
            <div className="absolute -top-14 -right-8 w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/images/promote/Group181.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute -bottom-12 -left-10 w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/images/promote/Group180.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN – FORM (SHOWN ON ALL DEVICES) ── */}
        <div className="flex flex-col gap-3 lg:pt-16 w-full">
          {/* TOP DESIGN - HIDDEN ON MOBILE */}
          <div className="hidden lg:block absolute -top-10 right-0 w-[320px] h-[120px]">
            {/* Curve 1 */}
            <div>
              <img
                src="/images/promote/Vector 10.png"
                className="w-60 object-contain absolute -left-70 -top-6"
                alt="curve"
              />
              <img
                src="/images/promote/img2.png"
                className="absolute top-10 -left-70 w-18 h-18"
                alt=""
              />
            </div>

            {/* 2nd */}
            <div>
              <img
                src="/images/promote/Vector 10.png"
                className="w-60 object-contain absolute -left-20 -top-6"
                alt="curve"
              />
              <img
                src="/images/promote/img3.png"
                className="absolute top-10 right-86 w-18 h-18"
                alt=""
              />
            </div>

            {/* 3rd */}
            <div>
              <img
                src="/images/promote/Vector 10.png"
                className="w-60 object-contain absolute -right-10 -top-6"
                alt="curve"
              />
              <img
                src="/images/promote/img1.png"
                className="absolute top-12 right-36 w-18 h-18"
                alt=""
              />
            </div>
          </div>

          {/* Mobile Header with Badge and Images */}
          <div className="lg:hidden flex items-center justify-between w-full mb-2">
            {/* Badge */}
            <p className={`text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full ${
              darkMode
                ? "bg-blue-950/50 text-blue-400"
                : "bg-blue-100 text-blue-600"
            }`}>
              Partner With Us
            </p>
            
            {/* Images container */}
            <div className="flex items-center justify-between gap-6">
              <img
                src="/images/promote/img2.png"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                alt=""
              />
              <img
                src="/images/promote/img3.png"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                alt=""
              />
              <img
                src="/images/promote/img1.png"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                alt=""
              />
            </div>
          </div>

          {/* Heading - SHOWN ON MOBILE (smaller size) */}
          <h2 className={`lg:hidden font-black text-[2rem] md:text-[2.4rem] leading-tight max-w-2xl mb-2 ${
            darkMode ? "text-white" : "text-gray-950"
          }`}>
            Promote Your Learning Platform To Thousands Of Students
          </h2>

          <p className={`text-md leading-relaxed max-w-120 mt-2 lg:mt-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Want to promote your courses, study materials, or learning platform?
          </p>
          
          <p className={`font-bold text-[15px] leading-relaxed max-w-120 ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}>
            Submit your platform and connect with students looking for the best
            resources for their exams and studies.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-1">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className={`text-[15px] font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  Platform Name
                </label>
                <input
                  name="platformName"
                  value={form.platformName}
                  onChange={handleChange}
                  placeholder="Enter your platform name"
                  className={`w-full rounded-lg border px-4 py-3 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    darkMode
                      ? "bg-[#1A1A1A] border-gray-700 text-gray-200"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className={`text-[15px] font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  Website URL
                </label>
                <input
                  name="websiteURL"
                  value={form.websiteURL}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className={`w-full rounded-lg border px-4 py-3 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    darkMode
                      ? "bg-[#1A1A1A] border-gray-700 text-gray-200"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className={`text-[15px] font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  Contact Email
                </label>
                <input
                  name="contactEmail"
                  value={form.contactEmail}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  type="email"
                  className={`w-full rounded-lg border px-4 py-3 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    darkMode
                      ? "bg-[#1A1A1A] border-gray-700 text-gray-200"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className={`text-[15px] font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  Promotion Type
                </label>
                <div className="relative">
                  <select
                    name="promotionType"
                    value={form.promotionType}
                    onChange={handleChange}
                    className={`w-full appearance-none rounded-lg border px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10 ${
                      darkMode
                        ? "bg-[#1A1A1A] border-gray-700 text-gray-200"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    {promotionTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <svg
                    className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3 — full width */}
            <div className="flex flex-col gap-1">
              <label className={`text-[15px] font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Target Exams / Classes
              </label>
              <input
                name="targetExams"
                value={form.targetExams}
                onChange={handleChange}
                placeholder="Example: NEET, JEE, Class 10, CBSE"
                className={`w-full rounded-lg border px-4 py-3 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  darkMode
                    ? "bg-[#1A1A1A] border-gray-700 text-gray-200"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
              />
            </div>

            {/* Row 4 — textarea */}
            <div className="flex flex-col gap-1">
              <label className={`text-[15px] font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your platform, courses, or resources you want to promote."
                className={`w-full rounded-lg border px-4 py-3 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none ${
                  darkMode
                    ? "bg-[#1A1A1A] border-gray-700 text-gray-200"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex w-fit bg-[#2563EB] text-white font-semibold text-[15px] px-10 py-4 rounded-lg transition-all duration-300 relative overflow-hidden group mt-1"
            >
              <span className="relative z-10">Submit Promotion Request</span>
              <span className="absolute inset-0 bg-[#1d4ed8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}