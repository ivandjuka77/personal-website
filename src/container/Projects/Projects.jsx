import React from 'react';

import './Projects.scss';
import { motion } from 'framer-motion';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

let projects = [
	{
		title: "Gatsby's Waiter",
		id: 'project-gatsby',
		desc: 'Simple POS system for waiters',
		imgUrl: require('../../assets/gatsby.png'),
		link: 'https://gatsby-waiter.onrender.com',
		github: 'https://github.com/ivandjuka77/WIP-gatsbys-waiter',
	},

	{
		title: 'Barber Cuts',
		id: 'project-barber',
		desc: 'Business website for Barber shop',
		imgUrl: require('../../assets/barber-cuts.png'),
		link: 'https://barbercuts.netlify.app/',
		github: 'https://github.com/ivandjuka77/barber-cuts-new',
	},
	{
		title: 'QR Coder',
		id: 'project-qr',
		desc: 'Simple QR Code generator',
		imgUrl: require('../../assets/qrcoder.png'),
		link: 'https://qrcoder-project.netlify.app/',
		github: 'https://github.com/ivandjuka77/qr-coder',
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
							id={project.id}
							key={project.title + index}
						>
							<a
								href={project.link}
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={project.imgUrl}
									id={project.id + '-img'}
									alt='projectimg'
									className='project-img'
								/>

								<h2>{project.title}</h2>
								<p>{project.desc}</p>
							</a>
							<div className='btns'>
								<a
									href={project.link}
									target='_blank'
									rel='noreferrer'
								>
									<motion.button
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3, type: 'tween' }}
									>
										Live Demo
									</motion.button>
								</a>
								<a
									href={project.github}
									target='_blank'
									rel='noreferrer'
								>
									<motion.button
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3, type: 'tween' }}
									>
										GitHub
									</motion.button>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
