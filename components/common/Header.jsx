"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Search, Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // New state for nested dropdowns
  const { darkMode, toggleDarkMode } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", dropdown: false, href: "/" },
    {
      name: "Classes",
      dropdown: true,
      href: "#",
      items: ["Class 6-8", "Class 9-10", "Class 11-12", "Competitive"],
    },
    {
      name: "Boards",
      dropdown: true,
      href: "#",
      items: [
        { 
          title: "CBSE", 
          href: "/boards/cbse",
        },
        { 
          title: "ICSE", 
          href: "/boards/icse",
        },
        { 
          title: "State Boards", 
          href: "/boards/state-boards",
          hasNested: true,
          nestedKey: "stateBoards",
          subItems: [
            { title: "UP Board", href: "/boards/state/up" },
            { title: "Bihar Board", href: "/boards/state/bihar" },
            { title: "Rajasthan Board", href: "/boards/state/rajasthan" },
            { title: "MP Board", href: "/boards/state/mp" },
           
          ]
        },
        { 
          title: "International", 
          href: "/boards/international",
          hasNested: true,
          nestedKey: "international",
          subItems: [
            { title: "Cambridge (CIE)", href: "/boards/international/cambridge" },
            { title: "IB (International Baccalaureate)", href: "/boards/international/ib" },
            { title: "IGCSE", href: "/boards/international/igcse" },
            { title: "EDEXCEL", href: "/boards/international/edexcel" },
           
          ]
        }
      ],
    },
    {
      name: "Exams",
      dropdown: true,
      href: "#",
      items: ["CUET UG", "NEET", "JEE","Class 6-8", "Class 9-10","CLASS 12","ALL"],
    },
    {
      name: "Study Materials",
      dropdown: true,
      href: "#",
      items: ["Notes", "Practice Papers", "Reference Books"],
    },
    {
      name: "Exam Updates",
      dropdown: true,
      href: "#",
      items: [
        "All Updates",
        "CUET Updates",
        "NEET Updates",
        "JEE Updates",
        "Board Exam Updates",
        "Admit Cards",
        "Results",
        "Syllabus Updates",
      ],
    },
    {
    name: "Promote Your Brand",
    dropdown: false,
    href: "#",
    
  },
    
  ];

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenNestedDropdown(null); // Close nested dropdown when changing main dropdown
  };

  const handleNestedClick = (nestedKey) => {
    setOpenNestedDropdown(openNestedDropdown === nestedKey ? null : nestedKey);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  // Helper function to render dropdown items
  const renderDropdownItems = (items, parentIndex = null) => {
    return items.map((subItem, subIndex) => {
      // Handle string items
      if (typeof subItem === 'string') {
        return (
          <motion.div
            key={subIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: subIndex * 0.03 }}
          >
            <Link
              href="#"
              className={`group relative flex items-center gap-3 px-5 py-3 text-sm transition-all duration-200 overflow-hidden ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-[#2563EB]"
              }`}
              onClick={() => setOpenDropdown(null)}
            >
              <div
                className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  darkMode ? "bg-blue-600/20" : "bg-blue-50"
                }`}
              />
              <div
                className={`relative z-10 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-600 group-hover:bg-blue-500 group-hover:scale-150"
                    : "bg-gray-300 group-hover:bg-blue-500 group-hover:scale-150"
                }`}
              />
              <div className="relative z-10 flex-1">
                <span className="font-medium">{subItem}</span>
              </div>
              <svg
                className={`relative z-10 w-3.5 h-3.5 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                  darkMode ? "text-blue-500" : "text-blue-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        );
      }
      
      // Handle items with nested dropdowns
      if (subItem.hasNested && subItem.subItems) {
        const isOpen = openNestedDropdown === subItem.nestedKey;
        
        return (
          <div key={subIndex} className="relative">
            <button
              onClick={() => handleNestedClick(subItem.nestedKey)}
              className={`w-full group relative flex items-center justify-between gap-3 px-5 py-3 text-sm transition-all duration-200 overflow-hidden ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-[#2563EB]"
              }`}
            >
              <div
                className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  darkMode ? "bg-blue-600/20" : "bg-blue-50"
                }`}
              />
              <div className="relative z-10 flex items-center gap-3 flex-1">
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-600 group-hover:bg-blue-500"
                      : "bg-gray-300 group-hover:bg-blue-500"
                  }`}
                />
                <span className="font-medium">{subItem.title}</span>
              </div>
              <ChevronDown
                size={14}
                className={`relative z-10 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                } ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              />
            </button>
            
            {/* Nested Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-8 pr-2 pb-2 space-y-1">
                    {subItem.subItems.map((nestedItem, nestedIndex) => (
                      <Link
                        key={nestedIndex}
                        href={nestedItem.href}
                        className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                          darkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                            : "text-gray-500 hover:text-[#2563EB] hover:bg-gray-50"
                        }`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="w-1 h-1 rounded-full bg-current" />
                        {nestedItem.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }
      
      // Handle regular object items (CBSE, ICSE)
      return (
        <motion.div
          key={subIndex}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: subIndex * 0.03 }}
        >
          <Link
            href={subItem.href || "#"}
            className={`group relative flex items-center gap-3 px-5 py-3 text-sm transition-all duration-200 overflow-hidden ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-[#2563EB]"
            }`}
            onClick={() => setOpenDropdown(null)}
          >
            <div
              className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                darkMode ? "bg-blue-600/20" : "bg-blue-50"
              }`}
            />
            <div
              className={`relative z-10 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-600 group-hover:bg-blue-500 group-hover:scale-150"
                  : "bg-gray-300 group-hover:bg-blue-500 group-hover:scale-150"
              }`}
            />
            <div className="relative z-10 flex-1">
              <span className="font-medium">{subItem.title}</span>
            </div>
            <svg
              className={`relative z-10 w-3.5 h-3.5 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                darkMode ? "text-blue-500" : "text-blue-600"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      );
    });
  };

  // Helper function to render mobile dropdown items
  const renderMobileDropdownItems = (items) => {
    return items.map((subItem, subIndex) => {
      // Handle string items
      if (typeof subItem === 'string') {
        return (
          <Link
            key={subIndex}
            href="#"
            className={`block py-2 text-sm transition-colors ${
              darkMode
                ? "text-gray-400 hover:text-[#2563EB]"
                : "text-[#475569] hover:text-[#2563EB]"
            }`}
            onClick={closeMobileMenu}
          >
            {subItem}
          </Link>
        );
      }
      
      // Handle items with nested dropdowns for mobile
      if (subItem.hasNested && subItem.subItems) {
        const isOpen = openNestedDropdown === subItem.nestedKey;
        
        return (
          <div key={subIndex} className="mb-2">
            <button
              onClick={() => handleNestedClick(subItem.nestedKey)}
              className={`w-full flex items-center justify-between py-2 text-sm transition-colors ${
                darkMode
                  ? "text-gray-300 hover:text-[#2563EB]"
                  : "text-[#475569] hover:text-[#2563EB]"
              }`}
            >
              <span className="font-medium">{subItem.title}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            
            {isOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {subItem.subItems.map((nestedItem, nestedIndex) => (
                  <Link
                    key={nestedIndex}
                    href={nestedItem.href}
                    className={`block py-1.5 text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-[#2563EB]"
                        : "text-[#475569] hover:text-[#2563EB]"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {nestedItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      }
      
      // Handle regular object items
      return (
        <Link
          key={subIndex}
          href={subItem.href || "#"}
          className={`block py-2 text-sm transition-colors ${
            darkMode
              ? "text-gray-400 hover:text-[#2563EB]"
              : "text-[#475569] hover:text-[#2563EB]"
          }`}
          onClick={closeMobileMenu}
        >
          {subItem.title}
        </Link>
      );
    });
  };

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? darkMode
              ? "bg-[#0A0A0A]/95 backdrop-blur-sm border-gray-800"
              : "bg-white/95 backdrop-blur-sm border-gray-100"
            : darkMode
              ? "bg-[#0A0A0A] border-gray-800"
              : "bg-white border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/images/logo.jpeg"
                  alt="ExamWaliSite logo"
                  className="w-8 h-8 object-contain"
                  loading="eager"
                />
                <h1
                  className={`text-xl md:text-2xl font-bold transition-colors ${
                    darkMode
                      ? "text-white hover:text-[#2563EB]"
                      : "text-gray-900 hover:text-[#2563EB]"
                  }`}
                >
                  ExamWaliSite
                </h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownClick(index)}
                      onMouseEnter={() => setOpenDropdown(index)}
                      className={`flex items-center gap-1 p-2   text-sm rounded-md transition-all duration-200 ${
                        openDropdown === index
                          ? darkMode
                            ? "text-[#2563EB] "
                            : "text-[#2563EB] "
                          : darkMode
                            ? "text-gray-300 hover:text-[#2563EB] hover:bg-blue-950/30"
                            : "text-[#475569] hover:text-[#2563EB] hover:bg-blue-50/50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block  text-sm rounded-md transition-all duration-200 ${
                        darkMode
                          ? "text-gray-300 hover:text-[#2563EB] "
                          : "text-[#475569] hover:text-[#2563EB] "
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onMouseLeave={() => {
                        setOpenDropdown(null);
                        setOpenNestedDropdown(null);
                      }}
                      className={`absolute top-full left-0 mt-2 min-w-[320px] rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-sm ${
                        darkMode
                          ? "bg-[#0A0A0A]/95 border border-gray-800/50"
                          : "bg-white/95 border border-gray-200/50 backdrop-blur-sm"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="py-2 max-h-[500px] overflow-y-auto">
                        {renderDropdownItems(item.items)}
                      </div>

                      {/* Quick actions footer */}
                      <div
                        className={`relative px-5 py-3 border-t flex items-center justify-between ${
                          darkMode
                            ? "border-gray-800/50 bg-gray-900/30"
                            : "border-gray-100 bg-gray-50/50"
                        }`}
                      >
                        <span
                          className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                        >
                          Need help?
                        </span>
                        <Link
                          href="/support"
                          className={`text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                            darkMode
                              ? "text-gray-400 hover:text-blue-500"
                              : "text-gray-500 hover:text-blue-600"
                          }`}
                        >
                          Contact support
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section - Keep the same */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all group ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800 text-yellow-400"
                    : "border-gray-200 hover:bg-gray-100 text-gray-700"
                }`}
              >
                {darkMode ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-[#475569]" />
                )}
              </button>

              {/* Search - Desktop */}
              <button
                className={`hidden sm:flex w-9 h-9 rounded-full border items-center justify-center transition-all group ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <Search
                  size={18}
                  className={darkMode ? "text-gray-400" : "text-[#475569]"}
                />
              </button>

              {/* CTA - Desktop */}
              <button className="hidden sm:block bg-[#2563EB] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Sign in</span>
                <span className="absolute inset-0 bg-[#1d4ed8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                {mobileMenuOpen ? (
                  <X
                    size={18}
                    className={darkMode ? "text-gray-400" : "text-[#475569]"}
                  />
                ) : (
                  <Menu
                    size={18}
                    className={darkMode ? "text-gray-400" : "text-[#475569]"}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slider Menu - Keep the same but update state handling */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${darkMode ? "bg-[#0A0A0A]" : "bg-white"}`}
      >
        <div className="flex flex-col h-full">
          {/* Slider Header */}
          <div
            className={`flex items-center justify-between p-4 border-b ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <span
              className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Menu
            </span>
            <button
              onClick={closeMobileMenu}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                darkMode
                  ? "hover:bg-gray-800 border-gray-700"
                  : "hover:bg-gray-100 border-gray-300"
              }`}
            >
              <X
                size={20}
                className={darkMode ? "text-gray-400" : "text-[#475569]"}
              />
            </button>
          </div>

          {/* Slider Content */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`border-b last:border-0 ${
                    darkMode ? "border-gray-800" : "border-gray-100"
                  }`}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className={`w-full flex items-center justify-between py-4 transition-colors ${
                          darkMode
                            ? "text-gray-300 hover:text-[#2563EB]"
                            : "text-[#475569] hover:text-[#2563EB]"
                        }`}
                      >
                        <span className="font-medium text-base">
                          {item.name}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === index && (
                        <div className="pb-3 pl-4 space-y-2">
                          {renderMobileDropdownItems(item.items)}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-4 transition-colors ${
                        darkMode
                          ? "text-gray-300 hover:text-[#2563EB]"
                          : "text-[#475569] hover:text-[#2563EB]"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="font-medium text-base">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Utility Items */}
              <div className="pt-6 space-y-2">
                <button
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-[#475569] hover:bg-gray-100"
                  }`}
                >
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <button className="w-full bg-[#2563EB] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-all">
                  Promote Platform
                </button>
              </div>
            </nav>
          </div>

          {/* Slider Footer */}
          <div
            className={`p-4 border-t ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`text-xs text-center ${darkMode ? "text-gray-500" : "text-[#475569]"}`}
            >
              © 2026 ExamWaliSite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}