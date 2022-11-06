import React from 'react';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <a className='navbar-logo' href='#home'>Ivan Djukic</a>
        <ul className='navbar-links'>
            {['home', 'projects', 'about', 'contact'].map(item => (
                <li key={`link-${item}`}>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar