import React, { Component } from 'react'
import Header from '../Header/Header'
import TypeWriter from '../TypeWriter/TypeWriter'
import { Box, BoxOne, BoxTwo, BoxThree, BoxFour } from '../Box/Box'
// import Typing from 'react-typing-animation'
// import TypeWriter from 'react-typewriter'
// import coinWatchScreen from '../../assets/coin-watch-screen.png'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'
// import scrollToComponent from 'react-scroll-to-component'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
        />
        <TypeWriter />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
// scroll={ scrollToComponent(this.Contact,  { offset: 0, align: 'top', duration: 1500}) }