import React from 'react';

import './Projects.scss';
import { motion } from 'framer-motion';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

let projects = [
	{
		title: "Gatsby's Waiter",
		desc: 'Simple POS system for waiters',
		imgUrl: 'https://i.imgur.com/XZm2irP.png',
		link: '',
	},

	{
		title: 'Barber Cuts',
		desc: 'Business website for Barber shop',
		imgUrl: 'https://i.imgur.com/hN2vkac.png',
		link: 'https://barbercuts.netlify.app/',
	},
];

const Projects = () => {
	return (
		<div id='projects'>
			<div className='projects-left'>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
				>
					My personal projects:
				</motion.h1>
				<motion.div
					className='projects-socials'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
				>
					<SocialMedia />
				</motion.div>
			</div>
			<div className='projects-right'>
				<div className='project-right-showcase'>
					{projects.map((project, index) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className='projects-right-item'
							key={project.title + index}
						>
							<a
								href={project.link}
								target='_blank'
							>
								<img
									src={project.imgUrl}
									alt='projectimg'
									className='project-img'
								/>
								<h2>{project.title}</h2>
								<p>{project.desc}</p>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
