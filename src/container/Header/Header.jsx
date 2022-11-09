import React from 'react';

import { FaReact, FaJsSquare, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import './Header.scss';
import headshot from '../../assets/headshot.png';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<div id='home'>
			<div className='header-left'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				>
					<img
						src={headshot}
						alt='headshot'
						className='header-headshot'
					/>
				</motion.div>
				<motion.div
					className='header-left-text'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				>
					<h1>
						Hi there! <span className='wave'>👋</span>
					</h1>
					<h1 className='header-name'>My name is Ivan</h1>
					<h2>I'm a Software Engineer.</h2>
				</motion.div>
			</div>
			<div className='header-right'>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					animate={{
						opacity: 1,
						x: 0,
						transition: { duration: 1.2, delay: 0.6 },
					}}
				>
					Welcome to my personal website! <br />
					Below you can find a little bit about me, <br />
					my personal projects, and how to contact me.
				</motion.h1>

				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 1.2, delay: 0.9 } }}
				>
					My primary skills:
				</motion.h2>
				<div className='header-skills'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.2, delay: 1 } }}
						whileHover={{ scale: 1.1, color: '#8758FF' }}
						transition={{ duration: 0.4, type: 'tween' }}
						className='header-skills-element'
					>
						<FaReact />
						<h3>React.js</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.2, delay: 1.1 } }}
						whileHover={{ scale: 1.1, color: '#8758FF' }}
						transition={{ duration: 0.4, type: 'tween' }}
						className='header-skills-element'
					>
						<SiNextdotjs />
						<h3>Next.js</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.2, delay: 1.2 } }}
						whileHover={{ scale: 1.1, color: '#8758FF' }}
						transition={{ duration: 0.4, type: 'tween' }}
						className='header-skills-element'
					>
						<FaNodeJs />
						<h3>Node.js</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.2, delay: 1.3 } }}
						whileHover={{ scale: 1.1, color: '#8758FF' }}
						transition={{ duration: 0.4, type: 'tween' }}
						className='header-skills-element'
					>
						<FaJsSquare />
						<h3>Java Script</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.2, delay: 1.4 } }}
						whileHover={{ scale: 1.1, color: '#8758FF' }}
						transition={{ duration: 0.4, type: 'tween' }}
						className='header-skills-element'
					>
						<FaDatabase />
						<h3>Databases</h3>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Header;
