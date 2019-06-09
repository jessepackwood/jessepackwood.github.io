import React from 'react'
import './Header.css'
import menuIcon from '../../assets/menu.svg'
import { Link } from "react-router-dom"

const Header = ({toggleMobileMenu, menuOpened}) => {

  return (
    <div className='header'>
      <h1 className='name-title'><Link to='/' className='route-link'>Jesse Packwood</Link></h1>
      <div className='nav-container'>
        <div className='mobile-menu'>
          <img src={menuIcon} alt={"Menu-icon"} className='menu-icon' onClick={toggleMobileMenu} />
          {menuOpened && (
              <div className='mobile-link-container'>
                <span className='nav-link mobile-link'><Link to='projects' className='route-link' onClick={toggleMobileMenu}>Dev Projects</Link></span>
                <span className='nav-link mobile-link'><Link to='presets' className='route-link' onClick={toggleMobileMenu}>Lightroom Presets</Link></span>
                <span className='nav-link mobile-link'><Link to='gallery' className='route-link' onClick={toggleMobileMenu}>Gallery</Link></span>                
                <span className='nav-link mobile-link'><Link to='/about' className='route-link' onClick={toggleMobileMenu}>About</Link></span>
                <span className='nav-link mobile-link'><Link to='/contact' className='route-link' onClick={toggleMobileMenu}>Contact</Link></span>
              </div>
            )}
        </div>
        <div className='nav-box'>
          <span className='nav-link'><Link to='projects' className='route-link'>Projects</Link></span>
          <span className='photo-link'>
            <Link to='/gallery' className='route-link'>Photography</Link>
            <Link to='/presets' className='presets-link'>Presets</Link>
            <Link to='/gallery' className='presets-link'>Gallery</Link>
          </span>
          <span className='nav-link'><Link to='/about' className='route-link'>About</Link></span>
          <span className='nav-link'><Link to='/contact' className='route-link'>Contact</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Header;