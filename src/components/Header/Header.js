import React from 'react'
import './Header.css'
// import scrollToComponent from 'react-scroll-to-component'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='name-title'>Please work</h1>
      <div className='nav-container'>
        <div className='nav-box'>
          <a className='nav-link' href='#projects'>Projects</a>
          <a className='nav-link' href='#about'>About</a>
          <a className='nav-link' href='#contact'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header