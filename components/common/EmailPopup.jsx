"use client";

import { useEffect, useState } from "react";
import { X, Mail, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function EmailPopup() {
  const { darkMode } = useTheme();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("emailPopupShown");
    if (!alreadyShown) {
      setTimeout(() => setShow(true), 1200);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("emailPopupShown", "true");
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    localStorage.setItem("emailPopupShown", "true");
    setShow(false);
    setIsSubmitting(false);
    console.log("Email submitted:", email);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start p-4 md:p-8 bg-black/50 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-sm rounded-md overflow-hidden shadow-2xl border ${
          darkMode
            ? "bg-[#0A0A0A] border-gray-800/60"
            : "bg-white border-[#e2e8f0]"
        }`}
        style={{ animation: "slideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full bg-[#2563eb]" />

        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={closePopup}
            className={`absolute top-5 right-5 rounded-full p-1.5 transition-all duration-200 ${
              darkMode
                ? "text-gray-600 hover:text-gray-300 hover:bg-white/5"
                : "text-gray-300 hover:text-gray-500 hover:bg-gray-100"
            }`}
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          {/* Icon + Title row */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-xl ${
                darkMode ? "bg-[#2563eb]/10" : "bg-[#eff6ff]"
              }`}
            >
              <Mail className="w-4.5 h-4.5 text-[#2563eb]" size={18} />
            </div>
            <h2
              className={`text-[1.35rem] font-bold leading-tight tracking-tight font-['Sora'] ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Stay Updated
            </h2>
          </div>

          {/* Divider */}
          <div className={`h-px mb-4 ${darkMode ? "bg-gray-800" : "bg-[#f1f5f9]"}`} />

          {/* Description */}
          <p
            className={`text-[0.8rem] leading-relaxed mb-5 ${
              darkMode ? "text-gray-500" : "text-[#64748b]"
            }`}
          >
            Get the latest updates, exclusive offers, and study resources delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm outline-none border transition-all duration-200
                focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb]
                ${
                  darkMode
                    ? "bg-[#111111] border-gray-800 text-gray-300 placeholder:text-gray-600"
                    : "bg-[#f8fafc] border-[#e2e8f0] text-[#334155] placeholder:text-[#94a3b8]"
                }`}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-[0.98] text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Subscribe Now
                  <ArrowRight size={15} />
                </span>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className={`text-[0.7rem] text-center mt-4 tracking-wide ${
            darkMode ? "text-gray-700" : "text-gray-300"
          }`}>
            NO SPAM &nbsp;·&nbsp; UNSUBSCRIBE ANYTIME
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}