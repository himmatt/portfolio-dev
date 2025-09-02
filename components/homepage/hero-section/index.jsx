"use client";
import React from 'react'
import { personalData } from "@/utils/data/personal-data";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const HeroSection = () => {
  return (
      <section className='relative flex flex-col items-center justify-between py-4 lg:py-12'>
          <BackgroundRippleEffect/>
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
              <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                  <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                      Hello, <br />
                      This is {''}
                      <span className='text-pink-500'>{personalData.name}</span>
                      {`,I'm a Professional`}
                      <span className='text-[#16f2b3]'>{personalData.designation}</span>
                  </h1>
              </div>
          </div>
          
    </section>
  )
}

export default HeroSection;
