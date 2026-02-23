"use client";

import { useState } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";
import ScrollHandler from "@/components/ScrollHandler";

export function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollHandler onSectionChange={setActiveSection} />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
