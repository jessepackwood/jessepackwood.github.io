import React from 'react'
import './About.css'
import resume from '../../assets/Jesse_Packwood_Resume.pdf'

const About = () => {
  return (
    <div id='about'>
      {/* <div className='subtitle-wrapper'>
        <h2 className='about-title'>About</h2>
      </div> */}
      <div className='about-wrapper'>
        <div className='portrait'>
        </div>
        <div className='about-me-text'>
          <h2 className='about-title'>About</h2>
          <h3 className='about-me-title'>
            Jesse is a software engineer and photographer living in Denver, CO.
          </h3>
          <p>
            He received a Bachelor's of Science in Economics from Indiana University and recently graduated with a full stack education from the Turing School of Software and Design.
            
          </p>
          <p>
            When not coding, his time goes into other passions such as motorcycles, snowboarding, and traveling the world.
          </p>
          <h3 className='skills'> Experience </h3>
          <p>
            Javascript, React, Redux, HTML5, CSS3, SQL, Node, TDD, Sketch, Lightroom, Photoshop
          </p>
          <a href={resume} className='resume'><h3 >Resume</h3></a>
        </div>
      </div>
    </div>
    )
}

export default About