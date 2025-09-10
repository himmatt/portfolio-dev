
import AboutSection from "@/components/homepage/about";
import Contact from "@/components/homepage/contact";
import ExperienceSection from "@/components/homepage/experience";
import HeroSection from "@/components/homepage/hero-section";
import SkillSection from "@/components/homepage/skill";
import React from "react";


export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <Contact/>
    </div>

  );
}
