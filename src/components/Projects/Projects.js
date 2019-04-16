import React from 'react'  
import coinWatchScreen from '../../assets/macbook-coin-watch.png'
import coinWatchPhone from '../../assets/iphone-coin-watch.png'
import coinWatchIpad from '../../assets/ipad-coin-watch.png'
import './Projects.css'

const Projects = () => {
  return (
    <div id='projects' className='block'>
      <div>
        <h2 className='subtitle'>Projects</h2>
      </div>
      <div>Coin Watch is a web app that allows users to simply calculate the value of your existing crypto portfolio or mock the value of your potential investment in a few easy steps.  </div>
      <a href='https://https://jessepackwood.github.io/CoinWatch/'>
        <div className='coin-watch-project'>
          <img className='coin-watch-phone' src={coinWatchPhone} alt='iphone screen display' />
          <img className='coin-watch' src={coinWatchScreen} alt='GIF of CoinWatch welcome screen' />
          <img className='coin-watch-ipad' src={coinWatchIpad} alt='iphone screen display' />
        </div>
      </a>
      <div className='other-projects'>
        <span><a href='https://github.com/katiescruggs/movie-tracker-frontend' className='project-link'>Movie Tracker</a></span>
        <span><a href='https://github.com/jessepackwood/swapiBox'className='project-link'>SWapiBox</a></span>
        <span><a href='https://jessepackwood.github.io/weathrly/'className='project-link'>Weathrly</a></span>
      </div>
    </div>
    )
}

export default Projects