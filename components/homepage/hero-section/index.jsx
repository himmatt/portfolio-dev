"use client";
import React from "react";
import { personalData } from "@/utils/data/personal-data";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TerminalHero from "@/components/ui/terminal";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/data/motion";
import { Spotlight } from "@/components/ui/spotlight";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { PulsatingButton } from "@/components/ui/pulsating-hover-button";

const HeroSection = () => {
  return (
      <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="grey"/>
        <div >
       
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
          <motion.div
            variants={slideInFromLeft(0.2)}
            initial="hidden"
            animate="visible"
            className="relative order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
          >
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Hello, <br />
              This is {""}
              <span className="bg-gradient-to-r from-blue-300 to-slate-500 bg-clip-text text-transparent">{personalData.name}</span>
              {` ,I'm a Professional `}
              <span className="text-white">{personalData.designation}</span>.
            </h1>
            <div className="z-[2] my-12 flex items-center gap-5">
              <Link
                href={personalData.github}
                target="_blank"
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
              <Link
                href={personalData.facebook}
                target="_blank"
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
              <Link
                href={personalData.twitter}
                target="_blank"
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <FaInstagram size={30} />
              </Link>
            </div>
                    
            <div className="flex items-center gap-3">
              <Link href="#contact" >
                <PulsatingButton>Contact Me</PulsatingButton>
              </Link>
              <Link role="button" target="_blank" href={personalData.resume}>
                <InteractiveHoverButton>Resume</InteractiveHoverButton>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.2)}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center p-2"
          >
            <TerminalHero />
          </motion.div>
        </div>
          </div>
          
    </section>
  );
};

export default HeroSection;
