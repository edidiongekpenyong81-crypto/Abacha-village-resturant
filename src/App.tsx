import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import CateringSection from "./components/CateringSection";
import ContactSection from "./components/ContactSection";
import StickyMobileBar from "./components/StickyMobileBar";
import Footer from "./components/Footer";
import ImageCustomizerWidget from "./components/ImageCustomizerWidget";

type ActiveTab = "home" | "menu" | "catering" | "contact";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");

  // Handle cross-tab navigation and smooth scrolling to anchors
  const scrollAndNavigate = (tab: ActiveTab, elementId?: string) => {
    setActiveTab(tab);

    if (elementId) {
      // If we are navigating to home first, give the DOM a split second to mount the home elements
      if (tab === "home") {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      // If no anchor, scroll immediately to the very top of the newly mounted tab
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll to top on standard tab switches (when not targeting an anchor)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-cream flex flex-col font-sans select-none antialiased">
      
      {/* Sticky frosted glass navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        scrollAndNavigate={scrollAndNavigate}
      />

      {/* Main viewport animated page container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <Hero scrollAndNavigate={scrollAndNavigate} />
              <AboutSection />
              <MenuSection isPreview={true} onSeeFullMenu={() => scrollAndNavigate("menu")} />
              <HowToOrder />
              <Testimonials />
              <Gallery />
            </motion.div>
          )}

          {activeTab === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <MenuSection isPreview={false} />
            </motion.div>
          )}

          {activeTab === "catering" && (
            <motion.div
              key="catering"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <CateringSection />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Shared Footer globally displayed */}
      <Footer scrollAndNavigate={scrollAndNavigate} />

      {/* Sticky custom shortcut bottom panel on touch mobile screens */}
      <StickyMobileBar />

      {/* Dynamic Image Customizer Widget */}
      <ImageCustomizerWidget />

    </div>
  );
}
