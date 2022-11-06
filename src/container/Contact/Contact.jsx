import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './Contact.scss';
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter  } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from 'framer-motion';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_id3u8i4', 'template_gytp31z', form.current, 'Y9_KXx0cx-NnuVC1q')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		
		form.current.reset()
	};
	let socialMedia = [
		{name: 'Email', icon: <HiMail/>, link: 'mailto: ivandjuka777@gmail.com'},
		{name: 'AngelList', icon: <FaAngellist />, link: 'https://angel.co/u/ivan-djukic-1'},
		{name: 'Github', icon: <FaGithub />, link: 'https://github.com/ivandjuka77'},
		{name: 'LinkedIn', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ivan-djukic-786460248'},
		{name: 'Twitter', icon: <FaTwitter />, link: 'https://twitter.com/ivandjukic02'}
	]

  	return (
		<div id='contact'>
			<div className='contact-left'>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
				>
					Contact me:</motion.h1>
				<span className='contact-name'>© Ivan Djukic. All rights reserved.</span>
			</div>
			<div className='contact-right'>
				<h2>Check out my social media:</h2>
				<div className='contact-icons'>
					{socialMedia.map(el => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.2, color: '#8758FF' }}
							transition={{ duration: 0.5, type: 'tween'}}
							className='contact-icons-element'
						>
							<a href={el.link} target="_blank" rel="noreferrer">
							{el.icon}
							<span>{el.name}</span>
							</a>
						</motion.div>
					))}
				</div>
				<form ref={form} onSubmit={sendEmail} className='contact-form'>
					<h2>Or send me an email directly:</h2>
					<input type='text' placeholder='Your name' name='name' className='form-input' />
					<input type='email' placeholder='Your email' name='email' className='form-input' />
					<textarea type='text' placeholder='Your message' name='message' className='form-input' id='form-message' />
					<button>Send Message</button>
				</form>
			</div>
		</div>
	)
}

export default Contact