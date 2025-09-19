import { footerSection } from '@/utils/data/footer'
import React from 'react'


const Footer = () => {
    return (
        <footer className='max-w-lg mx-auto mb-5 font-mono text-xs text-center'>
            <a href={footerSection.link}
                target='_blank'
                rel="noopener noreferrer"
                className='transition hover:text-gray-500'
            >
                {footerSection.title}
            </a>
      </footer>
  )
}

export default Footer
