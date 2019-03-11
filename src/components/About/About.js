import React from 'react'
import './About.css'
// import portrait from '../../assets/portrait.jpg'

const About = () => {
  return (
    <div className='block' id='about'>
      <div className='subtitle-wrapper'>
        <h2 className='about-title subtitle'>About</h2>
      </div>
      <div className='about-wrapper'>
        <div className='photo-icons'>
          <div className='portrait'>
          </div>
          <div className='icons'>
            icons
          </div>
        </div>
        <div className='about-me-text'>
          <h3 className='about-me-title'>
            Jesse Packwood is a web developer and designer living in Denver, CO.
          </h3>
          <p>
            He received a Bachelor's of Science in Economics from Indiana University in 2015 and recently graduated from the Turing School of Software and Design.
          </p>
          <p>
            When not coding or designing, his time goes into other passions such as motorcycles, photography, and traveling the world.
          </p>
          <h3 className='skills'> Skills </h3>
          <p>
            React, Redux, HTML5, CSS3, SASS, JavaScript, Node, Sketch, Lightroom
          </p>
        </div>
      </div>
    </div>
    )
}

export default About