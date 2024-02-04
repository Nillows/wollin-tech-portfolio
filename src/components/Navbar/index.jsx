import React, { useState } from 'react';
import './style.css';

function NavBar({ setActiveSection }) {
    // Initialize the activeLink state with 'about' to set "About Me" as default active
    const [activeLink, setActiveLink] = useState('about');

    const handleClick = (e, section) => {
        e.preventDefault();
        console.log(`Clicked on ${section}`);
        setActiveSection(section);
        setActiveLink(section); // Set the active link based on the clicked section
    };

    return (
        <nav>
            <a className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'about')}>About Me</a>
            <a className={`navbar-link ${activeLink === 'portfolio' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'portfolio')}>Portfolio</a>
            <a className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'contact')}>Contact Me</a>
            <a className={`navbar-link ${activeLink === 'resume' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'resume')}>Resume</a>
        </nav>
    );
}

export default NavBar;