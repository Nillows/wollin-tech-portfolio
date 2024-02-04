import React from 'react'
import './style.css'
import profilePic from '../../assets/img3660.jpg'

function About(props) {

    return (
        <div className='about-div'>
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile Picture" />
            <p>
            Hey there! My name is Thomas Wollin, and I'm from Keswick, Ontario. I'm on a journey to become a web 
            developer, with a big heart for automation, cybersecurity, and most importantly, making 
            tech accessible to everyone. I believe in the power of technology to open doors for people 
            with accessibility needs, and I'm all in on creating web solutions that not only work well 
            but work for everyone. Learning and growing every day, I'm excited to use my skills to make 
            a real difference. Let's make the digital world a place where everyone feels at home!
            </p>
        </div>

    )
}

export default About;