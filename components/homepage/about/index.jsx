"use client";
import { ShineBorder } from '@/components/ui/shine-border-card';
import { personalData } from '@/utils/data/personal-data';
import React from 'react'
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/data/motion';
import { motion } from "framer-motion";
const AboutSection = () => {
    return (
        <div id="about" className='my-12 lg:my-16 relative'>
            <motion.div
                variants={slideInFromRight(0.2)} 
                initial="hidden"
                animate="visible"
                className='hidden lg:flex flex-col items-center absolute top-16 -right-8'>
                <span className='bg-gray-800 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md'>
                    ABOUT ME
                </span>
                <span className='h-36 w-[2px] bg-gray-800'></span>
            </motion.div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
                <motion.div
                    variants={slideInFromLeft(0.2)}
                    initial="hidden"
                    animate="visible"
                    className='order-2 lg:order-1'>
                    <p className='font-medium mb-5 text-white text-xl uppercase'>Who I am?</p>
                    <p className='text-gray-400 text-sm lg:text-lg'>
                        {personalData.description}
                    </p>
                </motion.div>
                <motion.div
                    variants={slideInFromRight(0.2)}
                    initial="hidden"
                    animate="visible"
                    className='flex justify-center order-1 lg:order-2'>
                    <div>
                        <BackgroundGradient className="rounded-[22px] max-w-[250px] bg-white dark:bg-zinc-900">
                        <Image src={personalData.profile}
                            width={280}
                            height={280}
                            className='rounded-[22px] object-cover'
                            alt="Himmat Singh"
                        />
                        </BackgroundGradient>
                    </div>
                </motion.div>
            </div>
            
      
    </div>
  )
}

export default AboutSection;
