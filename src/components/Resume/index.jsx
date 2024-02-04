import React from 'react';
import './style.css';

export default function Resume() {
  return (
    <div className='resume-div'>
        <h2>Resume</h2>
        <a href="https://drive.google.com/file/d/1Th1VWGu6hRaM6YFmM0l9PcnAUbCkWa5v/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download my resume</a>
        <h3>Proficiencies</h3>
        <p><strong>Web Development:</strong> Proficient in HTML5, CSS3, and JavaScript (ES6+), with a focus on building interactive and responsive web applications.</p>
        <p><strong>Backend Technologies:</strong> Experienced with Node.js and Express for server-side development, and knowledgeable in both SQL (MySQL) and NoSQL (MongoDB) database systems.</p>
        <p><strong>Version Control:</strong> Skilled in using Git and GitHub for source code management and collaboration.</p>
        <p><strong>Frontend Frameworks:</strong> Competent in using major CSS frameworks (Bootstrap, Bulma, Materialize) for UI design, along with React for frontend development.</p>
        <p><strong>Template Engines:</strong> Familiar with Handlebars for server-side rendering.</p>
        <p><strong>Real-Time Applications:</strong> Adept at implementing real-time communication with Socket.io.</p>
    </div>
  );
}