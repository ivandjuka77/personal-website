import React from 'react';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import { FaHtml5, FaCss3Alt, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiMongodb, SiRedux } from 'react-icons/si';
import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div id='about'>
			<div className='about-left'>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
				>
					About me:
				</motion.h1>
				<motion.div
					className='about-socials'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
				>
					<SocialMedia />
				</motion.div>
			</div>
			<div className='about-right'>
				<h3 className='about-story-title'>My story</h3>
				<br />
				<p className='about-story'>
					I was born and raised in Bosnia and Herzegovina, and in 2021 I decided
					to move to the Slovak Republic by myself to study and pursue my
					dreams. Currently I am studying Applied Informatics in the Comenius
					University and in my free time, I make web applications.
					<br /> <br />I have been creating web applications for a long time,
					starting with site builders like SquareSpace and Wix, but I've since
					moved to a more complex toolbox that allows way more creativity.
					<br />
					Other than programming, I am very passionate about music and fitness,
					which help me to relax but also stay <br />
					full of energy troughout the day.
				</p>
				<span className='about-motivation'>
					My biggest motivation in life is helping people. This gives me a
					burning desire to create and positively impact milions of lives all
					around the planet.
				</span>
				<h3 className='about-skills-title'>My other relevant skills</h3>
				<div className='about-skills'>
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.2, color: '#8758FF' }}
						whileTap={{ scale: 0.7 }}
						transition={{ duration: 0.4, type: 'tween' }}
						className='about-skills-element'
					>
						<FaHtml5 />
						<span>HTML</span>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.2, color: '#8758FF' }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='about-skills-element'
					>
						<FaCss3Alt />
						<span>CSS</span>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.2, color: '#8758FF' }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='about-skills-element'
					>
						<SiRedux />
						<span>Redux</span>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.2, color: '#8758FF' }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='about-skills-element'
					>
						<FaBootstrap />
						<span>Bootstrap</span>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.2, color: '#8758FF' }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='about-skills-element'
					>
						<FaPython />
						<span>Python</span>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.2, color: '#8758FF' }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='about-skills-element'
					>
						<SiMongodb />
						<span>MongoDB</span>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
