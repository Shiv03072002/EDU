"use client";

import React, { useState } from "react";
import { 
  Search, BookOpen, ChevronRight, Share2, Facebook, Twitter, 
  Linkedin, Link2, Check, Clock, Eye, FileText, Video, Award, 
  TrendingUp, Users, Star, PlayCircle, Download, Bookmark, 
  ChevronDown, Filter, Grid3x3, List, BarChart3
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ClassDetailsPage() {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [filterType, setFilterType] = useState("all");

  const chapters = [
    { 
      id: 1, 
      name: "Real Numbers", 
      topics: 8, 
      duration: "2.5 hrs", 
      type: "mixed",
      completed: false,
      description: "Euclid's division lemma, Fundamental theorem of arithmetic, Irrational numbers",
      progress: 0,
      videoCount: 4,
      notesCount: 3,
      quizCount: 2
    },
    { 
      id: 2, 
      name: "Polynomials", 
      topics: 6, 
      duration: "2 hrs", 
      type: "mixed",
      completed: false,
      description: "Zeros of polynomials, Relationship between zeros and coefficients",
      progress: 0,
      videoCount: 3,
      notesCount: 2,
      quizCount: 2
    },
    { 
      id: 3, 
      name: "Pair of Linear Equations in Two Variables", 
      topics: 10, 
      duration: "3 hrs", 
      type: "video",
      completed: false,
      description: "Graphical method, Algebraic methods, Cross multiplication method",
      progress: 0,
      videoCount: 6,
      notesCount: 2,
      quizCount: 3
    },
    { 
      id: 4, 
      name: "Quadratic Equations", 
      topics: 7, 
      duration: "2.5 hrs", 
      type: "notes",
      completed: false,
      description: "Quadratic formula, Nature of roots, Word problems",
      progress: 0,
      videoCount: 4,
      notesCount: 4,
      quizCount: 2
    },
  ];

  const filteredChapters = chapters.filter(chapter => {
    const matchesSearch = chapter.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || chapter.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video':
        return <Video size={16} className="text-blue-500" />;
      case 'notes':
        return <FileText size={16} className="text-blue-500" />;
      default:
        return <BookOpen size={16} className="text-blue-500" />;
    }
  };

  const getTypeBadge = (type) => {
    switch(type) {
      case 'video':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600">Video Series</span>;
      case 'notes':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600">Study Notes</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600">Mixed Media</span>;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { icon: BookOpen, label: "Chapters", value: "14", change: "+2 new" },
    { icon: Clock, label: "Total Hours", value: "28.5", change: "Video content" },
    { icon: Video, label: "Video Lectures", value: "45+", change: "HD quality" },
    { icon: Award, label: "Practice Qs", value: "1000+", change: "With solutions" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0A0A0A]" : "bg-gradient-to-b from-gray-50 to-white"}`}>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className={`hover:text-[#2563eb] transition-colors flex items-center gap-1 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Home
              </a>
              <ChevronRight size={14} className={darkMode ? "text-gray-600" : "text-gray-400"} />
              <a href="/classes" className={`hover:text-[#2563eb] transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Classes
              </a>
              <ChevronRight size={14} className={darkMode ? "text-gray-600" : "text-gray-400"} />
              <span className={darkMode ? "text-gray-300 font-medium" : "text-gray-700 font-medium"}>
                Class 10 Mathematics
              </span>
            </div>
          </motion.div>

          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-[#2563eb]/10">
                <BookOpen className="w-6 h-6 text-[#2563eb]" />
              </div>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                darkMode ? "bg-[#1A1A1A] text-gray-300" : "bg-gray-100 text-gray-600"
              }`}>
                CBSE • NCERT • 2024-25
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold font-['Sora'] mb-4 ${
              darkMode ? "text-white" : "text-[#0f172a]"
            }`}>
              Class 10 <span className="text-[#2563eb]">Mathematics</span>
            </h1>
            <p className={`text-lg max-w-2xl ${darkMode ? "text-gray-400" : "text-[#475569]"}`}>
              Master mathematics with our comprehensive NCERT curriculum. Complete video lectures, 
              detailed notes, and extensive practice materials for board exam success.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group p-5 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? "bg-[#1A1A1A] border-gray-800 hover:border-gray-700" 
                    : "bg-white border-[#e2e8f0] hover:shadow-lg"
                }`}
              >
                <stat.icon className={`w-6 h-6 mb-3 text-[#2563eb]`} />
                <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-[#0f172a]"}`}>{stat.value}</p>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-[#475569]"}`}>{stat.label}</p>
                <p className={`text-xs mt-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{stat.change}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Chapters */}
          <div className="lg:col-span-2">
            
            {/* Controls Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search chapters..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all ${
                      darkMode
                        ? "bg-[#1A1A1A] border-gray-800 text-gray-300 placeholder:text-gray-500"
                        : "bg-white border-[#e2e8f0] text-[#64748b] placeholder:text-[#94a3b8]"
                    }`}
                  />
                  <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${
                    darkMode ? "text-gray-500" : "text-[#94a3b8]"
                  }`} />
                </div>

                <div className="flex gap-2">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className={`px-4 py-2.5 rounded-xl border text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                      darkMode
                        ? "bg-[#1A1A1A] border-gray-800 text-gray-300"
                        : "bg-white border-[#e2e8f0] text-gray-600"
                    }`}
                  >
                    <option value="all">All Types</option>
                    <option value="video">Video Series</option>
                    <option value="notes">Study Notes</option>
                    <option value="mixed">Mixed Media</option>
                  </select>
                  
                  <div className={`flex rounded-xl border ${
                    darkMode ? "border-gray-800" : "border-[#e2e8f0]"
                  }`}>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2.5 rounded-l-xl transition-all ${
                        viewMode === "list"
                          ? "bg-[#2563eb] text-white"
                          : darkMode ? "bg-[#1A1A1A] text-gray-400" : "bg-white text-gray-500"
                      }`}
                    >
                      <List size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2.5 rounded-r-xl transition-all ${
                        viewMode === "grid"
                          ? "bg-[#2563eb] text-white"
                          : darkMode ? "bg-[#1A1A1A] text-gray-400" : "bg-white text-gray-500"
                      }`}
                    >
                      <Grid3x3 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chapter List/Grid */}
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-3"}
              >
                {filteredChapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className={`group rounded-xl border transition-all duration-300 cursor-pointer ${
                      darkMode
                        ? "bg-[#1A1A1A] border-gray-800 hover:border-gray-700"
                        : "bg-white border-[#e2e8f0] hover:shadow-xl"
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getTypeIcon(chapter.type)}
                            <h3 className={`font-semibold text-lg ${darkMode ? "text-white" : "text-[#0f172a]"}`}>
                              {chapter.name}
                            </h3>
                          </div>
                          <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? "text-gray-400" : "text-[#64748b]"}`}>
                            {chapter.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-[#64748b]"}`}>
                              <BookOpen size={14} />
                              {chapter.topics} topics
                            </span>
                            <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-[#64748b]"}`}>
                              <Clock size={14} />
                              {chapter.duration}
                            </span>
                          </div>
                        </div>
                        {getTypeBadge(chapter.type)}
                      </div>

                      <div className="flex items-center gap-4 pt-3 mt-3  ${darkMode ? 'border-gray-800' : 'border-gray-100'}">
                        {chapter.videoCount > 0 && (
                          <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                            <PlayCircle size={12} />
                            {chapter.videoCount} videos
                          </span>
                        )}
                        {chapter.notesCount > 0 && (
                          <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                            <FileText size={12} />
                            {chapter.notesCount} notes
                          </span>
                        )}
                        {chapter.quizCount > 0 && (
                          <span className={`flex items-center gap-1 text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                            <BarChart3 size={12} />
                            {chapter.quizCount} quizzes
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all">
                          Start Learning
                        </button>
                        <button className={`p-2 rounded-lg transition-all ${
                          darkMode 
                            ? "bg-[#0A0A0A] text-gray-400 hover:text-white hover:bg-gray-800" 
                            : "bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        }`}>
                          <Bookmark size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredChapters.length === 0 && (
              <div className="text-center py-12">
                <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                  No chapters found matching your search.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Social Section */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`sticky top-24 rounded-2xl border p-6 ${
                darkMode 
                  ? "bg-[#1A1A1A] border-gray-800" 
                  : "bg-white border-[#e2e8f0]"
              }`}
            >
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-[#2563eb]/10">
                  <Share2 size={20} className="text-[#2563eb]" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-[#0f172a]"}`}>
                    Share this course
                  </h3>
                  <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    Help others succeed
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 p-3 rounded-xl bg-[#2563eb]/5">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#2563eb]" />
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    1,234 shares
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp size={14} className="text-green-500" />
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    +28 this week
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  darkMode 
                    ? "bg-[#0A0A0A] border border-gray-800 hover:bg-[#1A1A1A]" 
                    : "bg-gray-50 border border-[#e2e8f0] hover:bg-gray-100"
                }`}>
                  <Facebook size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className={`flex-1 text-left font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Share on Facebook
                  </span>
                  <ChevronRight size={16} className={darkMode ? "text-gray-600" : "text-gray-400"} />
                </button>

                <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  darkMode 
                    ? "bg-[#0A0A0A] border border-gray-800 hover:bg-[#1A1A1A]" 
                    : "bg-gray-50 border border-[#e2e8f0] hover:bg-gray-100"
                }`}>
                  <Twitter size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className={`flex-1 text-left font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Share on Twitter
                  </span>
                  <ChevronRight size={16} className={darkMode ? "text-gray-600" : "text-gray-400"} />
                </button>

                <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  darkMode 
                    ? "bg-[#0A0A0A] border border-gray-800 hover:bg-[#1A1A1A]" 
                    : "bg-gray-50 border border-[#e2e8f0] hover:bg-gray-100"
                }`}>
                  <Linkedin size={20} className="text-blue-700 group-hover:scale-110 transition-transform" />
                  <span className={`flex-1 text-left font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Share on LinkedIn
                  </span>
                  <ChevronRight size={16} className={darkMode ? "text-gray-600" : "text-gray-400"} />
                </button>
              </div>

              <button
                onClick={copyToClipboard}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 bg-[#2563eb] text-white hover:bg-[#1d4ed8]`}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 size={18} />
                    <span>Copy Course Link</span>
                  </>
                )}
              </button>

              <div className={`mt-6 pt-6 border-t ${darkMode ? "border-gray-800" : "border-[#e2e8f0]"}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-700"}`}>
                    4.9
                  </span>
                  <span className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    (2,345 ratings)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={14} className={darkMode ? "text-gray-500" : "text-gray-400"} />
                  <span className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    45,678 students enrolled
                  </span>
                </div>
                <p className={`text-xs mt-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}