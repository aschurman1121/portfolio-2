import React from 'react'
import './Navbar.css'
import {Router, Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <ul className='navbar__ul' >
        <Router>
            <li className='navbar__item'>
                <Link to='/'>About Me </Link>
                </li>
            <li className='navbar__item'>
                <Link to='/projects'>Projects </Link>
                </li>
            <li className='navbar__item'>
                <Link to='/contact'> Contact
                </Link>
                </li> 
            <li className='navbar__item'>
                <Link to='/resume'>Resume </Link>
                </li> 
        </Router>
    </ul>
    </div>
  )
}

export default Navbar