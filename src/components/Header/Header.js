import React from 'react';
import './Header.css';
import menuIcon from '../../assets/menu.svg';

const Header = ({toggleMobileMenu, menuOpened}) => {
  return (
    <div className='header'>
      <h1 className='name-title'>Jesse Packwood</h1>
      <div className='nav-container'>
        <div className='mobile-menu'>
          <img src={menuIcon} className='menu-icon' onClick={toggleMobileMenu} />
          {menuOpened && (
              <div className='mobile-link-container'>
                <a className='nav-link' href='#projects'>Projects</a>
                <a className='nav-link' href='#about'>About</a>
                <a className='nav-link' href='#contact'>Contact</a>
                <a className='nav-link' href='#contact'>Github</a>
              </div>
            )}
        </div>
        <div className='nav-box'>
          <a className='nav-link' href='#projects'>Projects</a>
          <a className='nav-link' href='#about'>About</a>
          <a className='nav-link' href='#contact'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header;