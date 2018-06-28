import React from 'react'  
import coinWatchScreen from '../../assets/macbook-coin-watch.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='block' id='contact'>
      <div className='subtitle-wrapper'>
        <h2 className='contact-title subtitle'>Contact</h2>
      </div>
      <div className='contact-wrapper'>
        <div className='contact-info'>
          <h3 className='contact-name'>Jesse Packwood</h3>
          <span>Web Developer and Designer</span>
          <span>hello@jessepackwood.com</span>
          <span>+317 361 0166</span>
        </div>
      </div>
    </div>
    )
}

export default Contact