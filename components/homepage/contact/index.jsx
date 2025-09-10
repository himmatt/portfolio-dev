"use client"
import { contactSection } from '@/utils/data/contact'
import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import { PulsatingButton } from '@/components/ui/pulsating-hover-button';
import { slideInFromTop } from '@/utils/data/motion';

const Contact = () => {
    const { subtitle, title, paragraphs, link } = contactSection;
  return (
      <motion.div
          id="contact"
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className='max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32'
      >
          <p className='mb-3 font-medium text-sm lg:text-lg text-gray-400 capitalize'>
              {subtitle}
          </p>
          <p className='font-medium text-white text-3xl mb-5'>{title}</p>
          
          {paragraphs.map((paragraph, i) => (
              <p key={i} className='text-gray-400 text-sm lg:text-lg'>{paragraph}</p>
          ))}
          
        <div className='flex justify-center py-6'>
          <Link href={link} target='_blank'>
              <PulsatingButton>SAY HELLO</PulsatingButton>
              </Link>
        </div>
      
    </motion.div>
  )
}

export default Contact
