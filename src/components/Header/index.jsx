import React from 'react'
import './style.css'
import NavBar from '../Navbar'
import logoPic from '../../assets/Logo.webp'



function Header({setActiveSection}) {

    return (
        <header>
            { <img src={logoPic} alt="Logo Picture" /> }
            <h1>Thom Wollin</h1>
            <NavBar setActiveSection={setActiveSection} />
        </header>
    )
}


export default Header;