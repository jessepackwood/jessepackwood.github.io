import React from 'react'  
import twitter_logo from '../../assets/logos/twitter_logo.png'
import instagram_logo from '../../assets/logos/instagram_logo.png'
import github_logo from '../../assets/logos/github_logo.png'
import linkedIn_logo from '../../assets/logos/linkedIn_logo.png'
import './Contact.css'


const Contact = () => {
  return (
    <div className='block' id='contact'>
      <div className='subtitle-wrapper'>
        <h2 className='contact-title subtitle'>Contact</h2>
        
      </div>
      <section id='contact-logos'>
          <a href='https://github.com/jessepackwood'><img src={github_logo} className='contact-logo'/></a>
          <a href='https://www.linkedin.com/in/jessepackwood/'><img src={linkedIn_logo} className='contact-logo'/></a>
          <a href='https://www.instagram.com/jessepackwood'><img src={instagram_logo} className='contact-logo'/></a>
          <a href='https://www.twitter.com/jessepackwood/'><img src={twitter_logo} className='contact-logo'/></a>
        </section>
      <div className='contact-wrapper'>
        <div className='contact-info'>
          <h3 className='contact-name'>Jesse Packwood</h3>
          <span className='job-title'>Software Engineer <span className='contact-plus'>/</span>Photographer</span>
          <span><span className='contact-plus'>+</span>317 361 0166</span>
          <span><a href="mailto:jesse@lokithewolfdog.com" className='contact-email-link'>jesse@lokithewolfdog.com</a></span>
        </div>
      </div>
      
    </div>
    )
}

export default Contact