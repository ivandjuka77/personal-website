import React from 'react'

import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter  } from "react-icons/fa";
import './SocialMedia.scss'
import { motion } from 'framer-motion'

const SocialMedia = () => {

  let SocialMedia = [
    {name: 'AngelList', icon: <FaAngellist />, link: 'https://angel.co/u/ivan-djukic-1'},
		{name: 'Github', icon: <FaGithub />, link: 'https://github.com/ivandjuka77'},
		{name: 'LinkedIn', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ivan-djukic-786460248'},
		{name: 'Twitter', icon: <FaTwitter />, link: 'https://twitter.com/ivandjukic02'}
  ]
    
  return (
    <div className='socialMedia'>
      {SocialMedia.map(el => (
        <motion.div className='socialMedia-icon'
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5, type: 'tween'}}
        >
          <a href={el.link} target="_blank" rel="noreferrer">
            {el.icon}
          </a>
        </motion.div>
      ))}
      
    </div>
  )
}

export default SocialMedia
