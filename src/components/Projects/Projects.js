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
      <div className='coin-watch-project'>
        <img className='coin-watch-phone' src={coinWatchPhone} alt='iphone screen display' />
        <img className='coin-watch' src={coinWatchScreen} alt='GIF of CoinWatch welcome screen' />
        <img className='coin-watch-ipad' src={coinWatchIpad} alt='iphone screen display' />
      </div>
      <div className='other-projects'>
        <div>
          <span>Movie Tracker</span>
        </div>
        <span>SWapiBox</span>
        <span>Weathrly</span>
      </div>
    </div>
    )
}

export default Projects