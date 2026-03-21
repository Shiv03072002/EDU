// "use client";

// import React from "react";
// import Image from "next/image";
// import { Search, Target, ArrowDown } from "lucide-react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const tags = ["CBSE", "NEET", "JEE", "CUET", "Class 10", "Class 12"];
//   const marqueeItems = ["NEET", "JEE", "CUET", "CBSE", "NEET", "JEE", "CUET", "CBSE"];
//   const colors = ["#16a34a", "#eb248b", "#ebe826", "#2563eb"];

//   return (
//     <section className="relative bg-white min-h-screen md:h-182 w-full py-6  md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden">

//       {/* ─── DECORATIVE SHAPES ─── */}

//       {/* LEFT blue shape — hidden on mobile, visible md+ */}
//       <div className="hidden md:block absolute left-0 bottom-20 w-[110px] z-0">
//         <Image src="/images/home/left.png" alt="left-shape" width={400} height={100} className="w-full h-auto" priority />
//       </div>

//       {/* RIGHT blue shape — hidden on mobile, visible md+ centered vertically */}
//       <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[140px] z-0">
//         <Image src="/images/home/right.png" alt="right-shape" width={200} height={400} className="w-full h-auto" priority />
//       </div>

//       {/* STAR — mobile: small top-right, desktop: larger */}
//       <div className=" hidden md:block  absolute right-[6%] md:right-[20%] top-8 md:top-24 w-7 md:w-16 z-10">
//         <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
//           <Image src="/images/home/Component 107.png" alt="star" width={80} height={80} className="w-full h-auto" />
//         </motion.div>
//       </div>

//       {/* BULB — mobile: small inline-ish top-left, desktop: floating */}
//       <motion.div
//         className=" hidden md:block  absolute left-[6%] md:left-30 top-8 md:top-28 w-8 md:w-20 z-10"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <Image src="/images/home/Component 105.png" alt="bulb" width={60} height={60} className="w-full h-auto" />
//       </motion.div>

//       {/* GREEN SPIRAL — hidden on mobile, visible md+ */}
//       <div className="hidden md:block absolute left-13 bottom-46 w-32 z-10">
//         <Image src="/images/home/Mask group (5).png" alt="green-spiral" width={80} height={80} className="w-full h-auto" />
//       </div>

//       {/* RED ARROW — hidden on mobile, visible md+ */}
//       <div className="hidden md:block absolute right-32 top-[46%] w-20 z-10">
//         <Image src="/images/home/Mask group (6).png" alt="red-arrow" width={80} height={80} className="w-full h-auto" />
//       </div>

//       {/* Mobile-only green spiral — bottom-left, well below search */}
//       <div className="block md:hidden absolute left-6 bottom-36 w-14 z-10">
//         <Image src="/images/home/Mask group (5).png" alt="green-spiral" width={80} height={80} className="w-full h-auto" />
//       </div>

//       {/* Mobile-only red arrow — bottom-right, well below search */}
//       <div className="block md:hidden absolute right-10 bottom-32 w-12 z-10">
//         <Image src="/images/home/Mask group (6).png" alt="red-arrow" width={80} height={80} className="w-full h-auto" />
//       </div>

//       {/* Mobile-only right blue blob — strictly bottom-right corner */}
//       <div className="block md:hidden absolute right-0 bottom-0 w-[120px] z-0">
//         <Image src="/images/home/right.png" alt="right-shape" width={200} height={400} className="w-full h-auto" />
//       </div>

//       {/* Mobile-only left blue blob — strictly bottom-left corner */}
//       <div className="block md:hidden absolute left-0 bottom-0 w-[90px] z-0">
//         <Image src="/images/home/left.png" alt="left-shape" width={400} height={100} className="w-full h-auto" />
//       </div>

//       {/* ─── FLOATING LABEL TAGS — lg+ only ─── */}
//       <motion.div className="hidden lg:block absolute left-24 z-20" style={{ top: "28%" }}
//         animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//         <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
//           <span className="text-sm text-[#0f172a]">NEET Notes</span>
//         </div>
//       </motion.div>

//       <motion.div className="hidden lg:block absolute left-40 z-20" style={{ top: "56%" }}
//         animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//         <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
//           <span className="text-sm text-[#0f172a]">JEE Mock Test</span>
//         </div>
//       </motion.div>

//       <motion.div className="hidden lg:block absolute right-24 z-20" style={{ top: "28%" }}
//         animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//         <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
//           <span className="text-sm text-[#0f172a]">CBSE Books</span>
//         </div>
//       </motion.div>

//       <motion.div className="hidden lg:block absolute right-40 z-20" style={{ top: "56%" }}
//         animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//         <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3 shadow-sm">
//           <span className="text-sm text-[#0f172a]">Class 10 Notes</span>
//         </div>
//       </motion.div>

//       {/* ─── MAIN CONTENT ─── */}
//       <div className="relative z-20 max-w-4xl mx-auto pt-10 md:pt-0">

//         {/* "Find resources for" + vertical marquee */}
//         <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 md:mb-12">
//           <div className="flex items-center gap-2">
//             <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
//             <p className="text-[#475569] text-sm sm:text-base">Find resources for</p>
//           </div>
//           <div className="h-8 overflow-hidden w-[72px]">
//             <div className="animate-marquee-vertical flex flex-col gap-2">
//               {marqueeItems.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{ backgroundColor: colors[index % colors.length] }}
//                   className="rounded px-3 flex items-center justify-center flex-shrink-0 h-8"
//                 >
//                   <span className="text-sm font-bold text-white leading-none">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* H1 */}
//         <h1 className="font-['Sora'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0f172a] text-center leading-tight capitalize px-2">
//           Find The Best Study Resources For Every Exam
//         </h1>

//         {/* Subheading */}
//         <p className="text-[#475569] text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mt-4 md:mt-6 font-['Inter'] leading-relaxed px-2">
//           Access study materials, notes, books, and preparation resources
//           for CBSE, NEET, JEE, CUET and more.
//         </p>

//         {/* ── SEARCH ── */}
//         <div className="relative max-w-2xl mx-auto mt-8 md:mt-10">

//           {/* DESKTOP: inline */}
//           <div className="hidden md:block relative">
//             <input
//               type="text"
//               placeholder="Search notes, books, mock tests, or exams..."
//               className="w-full h-[64px] pl-14 pr-48 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
//             />
//             <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
//             <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-150">
//               Search Resources
//             </button>
//           </div>

//           {/* MOBILE: stacked */}
//           <div className="flex flex-col gap-3 md:hidden">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search notes, books, mock tests, or exams..."
//                 className="w-full h-[52px] pl-11 pr-4 rounded-2xl border border-[#e2e8f0] bg-white text-[#64748b] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
//               />
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
//             </div>
//             <button className="w-full h-[52px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base rounded-2xl transition-colors duration-150">
//               Search Resources
//             </button>
//           </div>
//         </div>

//         {/* Tag pills — hidden on mobile */}
//         <div className="hidden md:flex flex-wrap justify-center gap-3 mt-6">
//           {tags.map((tag) => (
//             <button
//               key={tag}
//               className="px-5 py-2 rounded-full text-sm font-medium border border-[#cbd5e1] text-[#334155] bg-white hover:bg-[#f1f5f9] hover:border-[#94a3b8] transition-colors duration-150"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── EXPLORE MORE ── */}
//       <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 flex justify-center">
//         <div className="relative flex flex-col items-center justify-center">
//           <div
//             className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] rounded-full -z-10"
//             style={{ background: "linear-gradient(180deg, #2563EB26 0%, #F8FAFC00 20%)" }}
//           />
//           <motion.div
//             className="flex flex-col items-center gap-1.5"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <ArrowDown size={20} className="text-gray-400 md:w-8 md:h-8" />
//             <span className="text-sm md:text-base text-gray-400 font-medium tracking-wide">Explore More</span>
//           </motion.div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee-vertical {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-50%); }
//         }
//         .animate-marquee-vertical {
//           animation: marquee-vertical 6s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React from "react";
import Image from "next/image";
import { Search, Target, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const tags = ["CBSE", "NEET", "JEE", "CUET", "Class 10", "Class 12"];
  const marqueeItems = [
    "NEET",
    "JEE",
    "CUET",
    "CBSE",
    "NEET",
    "JEE",
    "CUET",
    "CBSE",
  ];
  const colors = ["#16a34a", "#eb248b", "#ebe826", "#2563eb"];

  return (
    <section className="relative bg-white h-174 md:h-182 w-full   md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* ─── DECORATIVE SHAPES ─── */}

      {/* LEFT blue shape — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute left-0 bottom-20 w-[110px] z-0">
        <Image
          src="/images/home/left.png"
          alt="left-shape"
          width={400}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* RIGHT blue shape — hidden on mobile, visible md+ centered vertically */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[140px] z-0">
        <Image
          src="/images/home/right.png"
          alt="right-shape"
          width={200}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* STAR — mobile: small top-right, desktop: larger */}
      <div className=" absolute right-[6%] md:right-[20%] top-13 md:top-24 w-10 md:w-16 z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/home/Component107.png"
            alt="star"
            width={80}
            height={80}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* BULB — mobile: small inline-ish top-left, desktop: floating */}
      <motion.div
        className="absolute left-[6%] md:left-30 top-12 md:top-28 w-10 md:w-20 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/home/Component105.png"
          alt="bulb"
          width={60}
          height={60}
          className="w-full h-auto"
        />
      </motion.div>

      {/* GREEN SPIRAL — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute left-14 bottom-46 w-32 z-10">
        <Image
          src="/images/home/green.png"
          alt="green-spiral"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* RED ARROW — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute right-33 top-[46%] w-20 z-10">
        <Image
          src="/images/home/red.png"
          alt="red-arrow"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only green spiral — bottom-left, well below search */}
      <div className="block md:hidden absolute left-9 bottom-36 w-18 z-10">
        <Image
          src="/images/home/green.png"
          alt="green-spiral"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only red arrow — bottom-right, well below search */}
      <div className="block md:hidden absolute right-23 bottom-40 w-16 z-10">
        <Image
          src="/images/home/red.png"
          alt="red-arrow"
          width={80}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only right blue blob — strictly bottom-right corner */}
      <div className="block md:hidden absolute right-0 bottom-28 w-[100px] z-0">
        <Image
          src="/images/home/right.png"
          alt="right-shape"
          width={200}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile-only left blue blob — strictly bottom-left corner */}
      <div className="block md:hidden absolute left-0 bottom-20 w-[90px] z-0">
        <Image
          src="/images/home/left.png"
          alt="left-shape"
          width={400}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* ─── FLOATING LABEL TAGS — lg+ only ─── */}
      <motion.div
        className="hidden lg:block absolute left-24 z-20"
        style={{ top: "28%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3">
          <span className="text-sm text-[#0f172a]">NEET Notes</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute left-40 z-20"
        style={{ top: "56%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3">
          <span className="text-sm text-[#0f172a]">JEE Mock Test</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-24 z-20"
        style={{ top: "28%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3">
          <span className="text-sm text-[#0f172a]">CBSE Books</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-40 z-20"
        style={{ top: "56%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white border border-[#e2e8f0] rounded px-5 py-3">
          <span className="text-sm text-[#0f172a]">Class 10 Notes</span>
        </div>
      </motion.div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-20 max-w-4xl mx-auto pt-10 md:pt-0">
        {/* "Find resources for" + vertical marquee */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 md:mb-12">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
            <p className="text-[#475569] text-sm sm:text-base">
              Find resources for
            </p>
          </div>
          <div className="h-8 overflow-hidden w-[72px]">
            <div className="animate-marquee-vertical flex flex-col gap-2">
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: colors[index % colors.length] }}
                  className="rounded px-3 flex items-center justify-center flex-shrink-0 h-8"
                >
                  <span className="text-sm font-bold text-white leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* H1 */}
        <h1 className="font-['Sora'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0f172a] text-center leading-tight capitalize px-2">
          Find The Best Study Resources For Every Exam
        </h1>

        {/* Subheading */}
        <p className="text-[#475569] text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mt-4 md:mt-6 font-['Inter'] leading-relaxed px-2">
          Access study materials, notes, books, and preparation resources for
          CBSE, NEET, JEE, CUET and more.
        </p>

        {/* ── SEARCH ── */}
        <div className="relative max-w-2xl mx-auto mt-8 md:mt-10">
          {/* DESKTOP: inline */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search notes, books, mock tests, or exams..."
              className="w-full h-[64px] pl-14 pr-48 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-150">
              Search Resources
            </button>
          </div>

          {/* MOBILE: stacked */}
          <div className="flex flex-col gap-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes, books, mock tests, or exams..."
                className="w-full h-[44px] pl-11 pr-4 rounded-xl border border-[#e2e8f0] bg-white text-[#64748b] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            </div>
            <div className="flex justify-center">
              <button className="inline-flex w-fit shrink-0 bg-[#2563eb] hover:bg-[#1d4ed8]  text-white text-sm font-semibold px-6 py-3 rounded-md whitespace-nowrap">
                Search Resources
              </button>
            </div>
          </div>
        </div>

        {/* Tag pills — hidden on mobile */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mt-6">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-5 py-2 rounded-full text-sm font-medium border border-[#cbd5e1] text-[#334155] bg-white hover:bg-[#f1f5f9] hover:border-[#94a3b8] transition-colors duration-150"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── EXPLORE MORE ── */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 flex justify-center">
        <div className="relative flex flex-col items-center justify-center">
          {/* Circle - positioned to not overlap with search */}
          <div
            className="absolute  -top-14 lg:-top-12 left-1/2 -translate-x-1/2 w-200 h-300 sm:w-[500px] md:w-[800px]  sm:h-[500px] md:h-[800px] rounded-full -z-10"
            style={{
              background:
                "linear-gradient(180deg, #2563EB26 0%, #F8FAFC00 20%)",
            }}
          />
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-gray-400 md:w-8 md:h-8" />
            <span className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
              Explore More
            </span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
