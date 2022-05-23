import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    <ul className='navbar__ul' >
        <li className='navbar__item'>About Me</li>
        <li className='navbar__item'>Projects</li>
        <li className='navbar__item'>Contact</li> 
        <li className='navbar__item'>Resume</li>
    </ul>
    </div>
  )
}

export default Navbar