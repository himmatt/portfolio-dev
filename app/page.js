
import AboutSection from "@/components/homepage/about";
import ExperienceSection from "@/components/homepage/experience";
import HeroSection from "@/components/homepage/hero-section";
import React from "react";


export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <ExperienceSection/>
    </div>

  );
}
