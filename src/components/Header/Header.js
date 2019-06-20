
import './Header.css'
import menuIcon from '../../assets/menu.svg'
import resume from '../../assets/Jesse_Packwood_Resume.pdf'
import { Link } from "react-router-dom"

import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()

    this.state = {
      menuOpened: false
    }
  }

  toggleMobileMenu = () => {
    this.setState( oldState => ({menuOpened: !oldState.menuOpened}));
  }

  render() {
    return (
      <div className='header'>
        <h1 className='name-title'><Link to='/' className='route-link'>Jesse Packwood</Link></h1>
        <div className='nav-container'>
          <div className='mobile-menu'>
            <img src={menuIcon} alt={"Menu-icon"} className='menu-icon' onClick={this.toggleMobileMenu} />
              <div className={this.state.menuOpened ? 'mobile-link-container mobile-opened': 'mobile-link-container'}>
                <span className='nav-link mobile-link'><Link to='projects' className='route-link' onClick={this.toggleMobileMenu}>Dev Projects</Link></span>
                <span className='nav-link mobile-link'><Link to='presets' className='route-link' onClick={this.toggleMobileMenu}>Lightroom Presets</Link></span>
                <span className='nav-link mobile-link'><Link to='gallery' className='route-link' onClick={this.toggleMobileMenu}>Photography</Link></span>                
                <span className='nav-link mobile-link'><Link to='/about' className='route-link' onClick={this.toggleMobileMenu}>About</Link></span>
                <span className='nav-link mobile-link'><a href={resume} className='route-link'>Resume</a></span>
                <span className='nav-link mobile-link'><Link to='/contact' className='route-link' onClick={this.toggleMobileMenu}>Contact</Link></span>
              </div>
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
    );
  }
}

export default Header;