import React from 'react'  
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
          <span className='job-title'>Software Engineer <span className='contact-plus'>/</span>Photographer</span>
          <span><span className='contact-plus'>+</span>317 361 0166</span>
          <span className='contact-email'>jesse@lokithewolfdog.com</span>
        </div>
      </div>
    </div>
    )
}

export default Contact