import React, { useState } from "react";
import { Sparkles, Sliders, RefreshCw, X, Check, FileImage, Settings, HelpCircle } from "lucide-react";
import { useCustomImages } from "../context/CustomImageContext";

export default function ImageCustomizerWidget() {
  const { isEditingSession, setIsEditingSession, resetAllImages, images } = useCustomImages();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate customized count
  const customizedCount = Object.keys(images).filter(
    (key) => !images[key].startsWith("/src/assets/") && !images[key].startsWith("https://")
  ).length;

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-24 sm:bottom-8 left-4 sm:left-6 z-40 select-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-none bg-black text-white border transition-all duration-300 shadow-2xl hover:scale-102 ${
            isEditingSession
              ? "border-red-500 text-red-500 shadow-red-500/10"
              : "border-[#D4AF37] text-gold hover:border-white hover:text-white"
          } font-display text-[10px] uppercase tracking-[0.2em]`}
        >
          <Sparkles size={12} className={isEditingSession ? "animate-pulse" : "animate-spin-slow"} />
          <span>{isEditingSession ? "Design Mode Active" : "Customize Images"}</span>
          {customizedCount > 0 && (
            <span className="ml-1 bg-[#D4AF37] text-black w-4 h-4 rounded-none flex items-center justify-center font-mono text-[9px] font-bold">
              {customizedCount}
            </span>
          )}
        </button>
      </div>

      {/* Control Panel Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-24 left-4 sm:left-6 z-40 w-80 bg-[#121212] border border-white/10 p-5 shadow-2xl rounded-none animate-scale-up select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2 text-white">
              <Settings size={13} className="text-gold" />
              <h4 className="font-serif font-light text-xs tracking-wider uppercase">Visual Asset Hub</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#666] hover:text-white transition-colors p-1"
            >
              <X size={14} />
            </button>
          </div>

          {/* Description */}
          <p className="font-sans text-[10px] text-[#888] leading-relaxed mb-4">
            Change any logo, background, story, list banner, or gallery photo instantly! Switch on Design Mode, then click "Choose Image" directly on any image across the page to upload your own files.
          </p>

          {/* Controls */}
          <div className="space-y-3">
            {/* Toggle Editing */}
            <button
              onClick={() => {
                setIsEditingSession(!isEditingSession);
              }}
              className={`w-full py-2.5 px-3 block text-center font-display text-[9.5px] uppercase tracking-wider transition-all duration-300 border ${
                isEditingSession
                  ? "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  : "bg-transparent border-white/20 text-white hover:border-[#D4AF37] hover:text-gold"
              }`}
            >
              {isEditingSession ? "🔴 Turn Off Design Mode" : "🎨 Turn On Design Mode"}
            </button>

            {/* Reset Defaults */}
            {customizedCount > 0 && (
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to restore the original Abacha Village photo set? This will reset all your uploads.")) {
                    resetAllImages();
                  }
                }}
                className="w-full py-2.5 px-3 bg-transparent hover:bg-white/5 text-[#888] hover:text-white border border-white/10 text-center font-display text-[9.5px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <RefreshCw size={10} />
                <span>Restore Originals</span>
              </button>
            )}
          </div>

          {/* Help Checklist Footer */}
          <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5 font-sans text-[9px] text-[#555]">
            <div className="flex items-center gap-1.5">
              <Check size={10} className="text-gold" />
              <span>Auto-optimized formats (loads instantly)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check size={10} className="text-gold" />
              <span>Saves securely to local browser cache</span>
            </div>
            <div className="font-medium text-gold/60 mt-1">
              Active Uploads: {customizedCount} / 13 dynamic slots
            </div>
          </div>
        </div>
      )}
    </>
  );
}
