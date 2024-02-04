import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import CRUDTalkerPicture from './assets/crud-talker.png';
import hereSayPicture from './assets/HERE-SAY.jpg';
import codingQuizPicture from './assets/CQC.jpg';
import PWGENPicture from './assets/PWGEN.jpg';
import WeathPicture from './assets/WEATHER.jpg';
import techBlogPicture from './assets/ttb.png';
// Import additional project images here

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const projects = [
    {
        imgSrc: CRUDTalkerPicture,
        deployedLink: 'https://crudtalker-a62963a0a4c5.herokuapp.com/',
        heading: 'CRUD-Talker',
        githubLink: 'https://github.com/Nillows/Project2',
        techs: 'Express, MySQL, Sequelize, Handlebars, Socket.io'
    },
    
    { imgSrc: hereSayPicture,
      deployedLink: 'https://mahdi-matty.github.io/Here-Say/',
      heading: 'Here-Say',
      githubLink: 'https://github.com/Nillows/Project1',
      techs: '3 different APIs, HTML, and CSS' 
    },

    { imgSrc: codingQuizPicture,
      deployedLink: 'https://nillows.github.io/Module4/',
      heading: 'Coding Quiz Challenge',
      githubLink: 'https://github.com/Nillows/Module4/',
      techs: 'Javascript, HTML, and CSS'
    },

    { imgSrc: techBlogPicture,
      deployedLink: 'https://thoms-tech-blog-41eb527963c4.herokuapp.com/',
      heading: 'My Tech Blog',
      githubLink: 'https://github.com/Nillows/Module14/',
      techs: 'Node, Javascript, Sequilize, Heroku'
    },

    { imgSrc: PWGENPicture,
      deployedLink: 'https://nillows.github.io/PasswordGenerator/',
      heading: 'Password Generator',
      githubLink: 'https://github.com/Nillows/PasswordGenerator/',
      techs: 'HTML, CSS and Javascript'
    },

    { imgSrc: WeathPicture,
      deployedLink: 'https://nillows.github.io/Module6/',
      heading: 'Weather App',
      githubLink: 'https://github.com/Nillows/Module6',
      techs: 'HTML, CSS, and Javascript' },
  ];

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'portfolio' && 
        <div className='portfolio-div'>
          {projects.map((project, index) => {
              return <Project key={index} project={project} />
          })}
        </div>
      }
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
      <Footer />
    </>
  );
}

export default App;
