'use client'

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
 const { darkMode } = useTheme();
  
  const footerData = [
    {
      title: "Explore",
      links: [
        "Study Resources",
        "Exam Preparation",
        "Study Guides",
        "Latest Articles",
        "Education News",
      ],
    },
    {
      title: "Exams",
      links: [
        "NEET Preparation",
        "JEE Preparation",
        "CUET Preparation",
        "Class 10 Boards",
        "Class 12 Boards",
      ],
    },
    {
      title: "Resources",
      links: [
        "Study Notes",
        "Mock Tests",
        "Question Papers",
        "Study Guides",
        "NCERT Books",
      ],
    },
    {
      title: "Company",
      links: [
        "What We Do",
        "Promote Platform",
        "Question Papers",
        "Study Guides",
        "NCERT Books",
      ],
    },
  ];

  return (
    <footer className="bg-[#181818] text-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mobile: Center Section at Top */}
        <div className="block md:hidden w-full mb-12">
          <div className="">
            <h2 className="text-5xl font-bold tracking-wider text-white">
              STUDYHUB
            </h2>
            <p className="text-[#CBD5E1] text-base mt-4 leading-relaxed font-medium">
              We help students discover the best study resources. Get the
              latest study materials, exam updates, and preparation tips
              delivered to your inbox.
            </p>

            {/* Subscribe */}
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-lg text-base outline-none pr-28 border transition-colors shadow-md ${
                  darkMode
                    ? "bg-[#1A1A1A] border-gray-700 text-gray-200 placeholder:text-gray-500"
                    : "bg-white border-gray-200 text-gray-800"
                } focus:border-[#2563EB]`}
              />
              <button className=" hidden absolute right-1 top-1 bottom-1 w-[120px] text-white font-semibold text-base rounded-md overflow-hidden group">
                <span className="absolute inset-0 bg-[#2563EB] transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="absolute inset-0 bg-[#1d4ed8] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
                <span className="relative z-10 flex items-center justify-center w-full h-full">Subscribe</span>
              </button>
            </div>

            <button className="w-full bg-[#2563EB] mt-2 hover:bg-blue-700 px-8 py-3 text-base font-semibold text-white rounded-md transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Top Section - 35-30-35 Distribution */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
          {/* Left Section - 35% */}
          <div className="w-full md:w-[35%]">
            <div className="grid grid-cols-2 gap-6">
              {footerData.slice(0, 2).map((section, i) => (
                <div key={i}>
                  <h3 className="font-semibold mb-4 text-base tracking-wide text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-base text-[#CBD5E1]">
                    {section.links.map((link, idx) => (
                      <li
                        key={idx}
                        className="hover:text-white cursor-pointer transition-colors duration-200 font-medium"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Center Section - 30% (Hidden on Mobile) */}
          <div className="hidden md:block md:w-[30%]">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-wider text-white">
                STUDYHUB
              </h2>
              <p className="text-[#CBD5E1] text-base mt-4 leading-relaxed font-medium">
                We help students discover the best study resources. Get the
                latest study materials, exam updates, and preparation tips
                delivered to your inbox.
              </p>

              {/* Subscribe */}
              <div className="relative mt-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg text-base outline-none pr-28 border transition-colors shadow-md ${
                    darkMode
                      ? "bg-black border-gray-900 text-gray-200 placeholder:text-gray-500"
                      : "bg-white border-gray-200 text-gray-800"
                  } focus:border-[#2563EB]`}
                />
                <button className="  absolute right-1 top-1 bottom-1 w-[120px] text-white font-semibold text-base rounded-md overflow-hidden group">
                  <span className="absolute inset-0  bg-[#1d4ed8]  transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="absolute inset-0 bg-[#2563EB] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
                  <span className="relative z-10 flex items-center justify-center w-full h-full">Subscribe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - 35% */}
          <div className="w-full md:w-[35%] pl-0 lg:pl-20">
            <div className="grid grid-cols-2 gap-6 justify-end">
              {footerData.slice(2, 4).map((section, i) => (
                <div key={i}>
                  <h3 className="font-semibold mb-4 text-base tracking-wide text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-base text-[#CBD5E1]">
                    {section.links.map((link, idx) => (
                      <li
                        key={idx}
                        className="hover:text-white cursor-pointer transition-colors duration-200 font-medium"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section with social links */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#CBD5E1]">
              © 2026 StudyHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}