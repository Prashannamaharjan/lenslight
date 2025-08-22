import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/images.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const[sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='home container' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='photos' smooth={true} offset={-260} duration={500}>Photo</Link></li>
            <li><Link to='photographer' smooth={true} offset={-260} duration={500}>Photographer</Link></li>
            <li><Link to='Aboutuslogo' smooth={true} offset={-260} duration={500}>About Us</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} >Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
