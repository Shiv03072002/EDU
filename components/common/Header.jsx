"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      items: ["CBSE", "ICSE", "State Boards", "International"],
    },
    {
      name: "Exams",
      dropdown: true,
      href: "#",
      items: ["JEE", "NEET", "UPSC", "Banking"],
    },
    {
      name: "Study Materials",
      dropdown: true,
      href: "#",
      items: ["Notes", "Videos", "Practice Papers", "Reference Books"],
    },
    { name: "Articles", dropdown: false, href: "/articles" },
  ];

  const mobileLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Help & Support", href: "/support" },
  ];

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        scrolled ? "bg-white/95 " : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#2563EB] transition-colors">
                STUDYHUB
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
                    className={`flex items-center gap-1 px-3 py-2 text-md rounded-md transition-all duration-200 ${
                      openDropdown === index
                        ? "text-[#2563EB] bg-blue-50"
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
                    className="block px-3 py-2 text-md text-[#475569] hover:text-[#2563EB] hover:bg-blue-50/50 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search - Desktop */}
            <button className="hidden sm:flex w-9 h-9 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-100 transition-all group">
              <Search size={18} className="text-[#475569]" />
            </button>

            {/* CTA - Desktop */}
            <button className="hidden sm:block bg-[#2563EB] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Promote Platform</span>
              <span className="absolute inset-0 bg-[#1d4ed8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all"
            >
              {mobileMenuOpen ? (
                <X size={18} className="text-[#475569]" />
              ) : (
                <Menu size={18} className="text-[#475569]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slider Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Slider Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="font-bold text-gray-900">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
            >
              <X size={18} className="text-[#475569]" />
            </button>
          </div>

          {/* Slider Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {/* Mobile Navigation Items */}
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className="w-full flex items-center justify-between py-3 text-[#475569] hover:text-[#2563EB] transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      {openDropdown === index && (
                        <div className="pb-3 pl-4 space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href="#"
                              className="block py-2 text-sm text-[#475569] hover:text-[#2563EB] transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-[#475569] hover:text-[#2563EB] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Utility Items */}
              <div className="pt-4 space-y-2">
                <button className="w-full flex items-center gap-3 p-3 text-[#475569] hover:bg-gray-100 rounded-lg transition-all">
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <button className="w-full bg-[#2563EB] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-200">
                  Promote Platform
                </button>
              </div>

              
            </nav>
          </div>

          {/* Slider Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-center text-[#475569]">
              © 2024 STUDYHUB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}