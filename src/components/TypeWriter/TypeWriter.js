import React from 'react'
import './TypeWriter.css'
import Typist from 'react-typist'
import codeLogo from '../../assets/logos/code.png'
import { Link } from 'react-router-dom'

const TypeWriter = () => {
  return (
    <div className='typeWriter'>
      <Typist
        cursor={{hideWhenDone: true, hideWhenDoneDelay: 700}}
      >
        <span className='typing'>Hello.</span>
        <Typist.Backspace count={10} delay={1000} />
        <span className='typing'>Are you looking to hire a developer?</span>
        <Typist.Backspace count={50} delay={750} />
        <span>Click here to learn more.</span>
      </Typist>
      <div className='arrow-wrapper'>
        <Link to='about' className='route-link'>
          <img className='code-logo'src={codeLogo} alt='nav arrow down' />
        </Link>
      </div>
    </div>
  )
}

export default TypeWriter