import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'



function Footer(props) {

    return (
        <footer>
            <a href="https://github.com/Nillows" className='social-icon'>
                <FontAwesomeIcon icon={faGithub} style={{ padding: '20px' }} />
            </a>
            <a href="https://www.linkedin.com/in/Nillows/" className='social-icon'>
                <FontAwesomeIcon icon={faLinkedin} style={{ padding: '20px' }}  />
            </a>
            <a href="https://www.twitter.com/ThomWoll" className='social-icon'>
                <FontAwesomeIcon icon={faTwitter} style={{ padding: '20px' }}  />
            </a>
        </footer>
    )
}

export default Footer;