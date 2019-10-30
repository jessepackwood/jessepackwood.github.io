import Header from '../Header/Header'
import coinWatchScreen from '../../assets/macbook-coin-watch.png'
import coinWatchPhone from '../../assets/iphone-coin-watch.png'
import coinWatchIpad from '../../assets/ipad-coin-watch.png'
import movie_tracker_home from '../../assets/projects/movie_tracker_home.png'
import weathrly_welcome from '../../assets/projects/welcome-screen.png'
import current_weather from '../../assets/projects/currentweather-7hour.png'
import coinWatchPortfolio from '../../assets/projects/coin_watch_portfolio.png'
import './Projects.css'

import React, { Component } from 'react';

class Projects extends Component {
  constructor() {

    const MovieTracker = {
      name: 'Coin Watch',
      description: 'Crypto tracking app',
      technology: 'React, Redux, Firebase, SCSS',
      images: []
    }

    super()
    this.state={
      name: 'Coin Watch',
      description: 'Cryptocurrency portfolio app utilizing the Coincap API to display current prices. Users can create an account to watch specific coins and add coins to their portfolio to keep track of their total investment.',
      technology: 'React, Redux, Firebase, SCSS',
      images: [coinWatchScreen, coinWatchIpad, coinWatchPhone] 
    }
  }

  switchProjects = (something) => {
    this.setState({name: something})
  }

  render() {
    return (
      <div>
        <Header />
      
      <div id='projects'>
        {/* <div className='test-container'>
          <h1>{this.state.name}</h1>
          <p>{this.state.description}</p>
          <div className='project-image-container'>
            <img src={this.state.images[0]} className='project-image' />
            <img src={this.state.images[1]} className='project-image' />
            <img src={this.state.images[2]} className='project-image' />

          </div>
        </div> */}
          <h2 className='subtitle'>Projects</h2>
        <div>
          {/* <h2 className='project-title'>Coin Watch</h2> */}
        
        <a href='https://jessepackwood.github.io/CoinWatch/home'>
          <div className='coin-watch-project'>
            <img className='coin-watch-phone' src={coinWatchPhone} alt='iphone screen display' />
            <img className='coin-watch' src={coinWatchScreen} alt='GIF of CoinWatch welcome screen' />
            <img className='coin-watch-ipad' src={coinWatchIpad} alt='iphone screen display' />
          </div>
          
        </a>
        <img src={coinWatchPortfolio} className='coin-watch-portfolio'/>
        </div>
        <div className='featured-project-description'>
          <div className='heroku-link'><a href='https://coin-watch-jp.herokuapp.com/CoinWatch/home' className='heroku-link'>Live on Heroku!</a></div>
          <p>Coin Watch is a web app that allows users to simply calculate the value of your existing crypto portfolio
            or mock the value of your potential investment in a few easy steps. The main page initially lists all the coins by market cap value but allows the user to sort based on the best or worst performing coins at that time. There is also an option to limit the number of coins being viewed to the top 100. 
          </p>
        <p className='tech-used'> React, Redux, Firebase, SCSS</p>
        </div>
  
        <div className='other-projects'>

          <div className='project-container'>
            <a href='https://github.com/katiescruggs/movie-tracker-frontend' className='project-image-link'><img src={movie_tracker_home} className='project-display' /></a>
            <div className='project-description'>
              <p>Movie Tracker is a web app that fetches the movieDB api to show newly released movies. Users can create an account and sign in to favorite the movies they're interested in. </p>
              <p className='tech-used'>React, Redux, Postgres, SCSS</p>
            </div>
          </div>
  
          <div className='project-container'>
            <a href='https://jessepackwood.github.io/weathrly' className='project-image-link'><img src={weathrly_welcome} className='project-display' /></a>
            <img src={current_weather} className='project-display' />
            <div className='project-description'>
              <p>Weathrly is a simple react app that utilizes the weather underground API
                to fetch weather data according to a user specified location. Weathrly displays current weather,
                an hourly forecast, and a 10 day forecast. It also utilizes autocomplete typing functionality for the location input.
              </p>
            <p className='tech-used'>React, SCSS</p>
            </div>
          </div>

          <span><a href='https://github.com/jessepackwood/swapiBox'className='project-link'>SWapiBox</a></span>
          (Updated version coming soon)
        </div>
      </div>
      </div>
      )
  }
}


export default Projects