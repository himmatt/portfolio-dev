"use client";
import React from 'react'
import { personalData } from "@/utils/data/personal-data";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TerminalHero from '@/components/ui/terminal';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
const HeroSection = () => {
  return (
      <section className='relative flex flex-col items-center justify-between py-4 lg:py-12'>
          <div>
          <BackgroundRippleEffect/>
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
              <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                  <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                      Hello, <br />
                      This is {''}
                      <span className='text-blue-100'>{personalData.name}</span>
                      {` ,I'm a Professional `}
                        <span className='text-blue-200'>{personalData.designation}</span>
                          .
                  </h1>
                  <div className='my-12 flex items-center gap-5'>
                          <Link 
                              href={personalData.github}
                              target="_blank"
                              className="transition-all text-white hover:scale-125 duration-300"
                          >
                              <BsGithub size={30}/>
                          </Link>
                          <Link
                              href={personalData.linkedIn}
                              target='_blank'
                              className="transition-all text-white hover:scale-125 duration-300"
                          >
                              <BsLinkedin size={30} />
                          </Link>
                          
                    </div>  
                  </div>
                  <TerminalHero/>
              </div>
          </div>
    </section>
  )
}

export default HeroSection;
