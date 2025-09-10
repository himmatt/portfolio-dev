import { contactSection } from '@/utils/data/contact'
import React from 'react'

const Contact = () => {
    const { subtitle, title, paragraphs, link } = contactSection;
  return (
      <div
          id="contact"
          className='max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32'
      >
          <p className='mb-3 font-mono text-sm capitalize text-accent'>
              {subtitle}
          </p>
          <h2 className='heading-secondary !mb-5'>{title}</h2>
          
          {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
          ))}
          
          
      
    </div>
  )
}

export default Contact
