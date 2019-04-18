import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from '../Header/Header'
import TypeWriter from '../TypeWriter/TypeWriter'
import Routes from '../Routes/Routes'

import './App.css'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      menuOpened: false
    }
  }


  toggleMobileMenu = () => {
    this.setState( oldState => ({menuOpened: !oldState.menuOpened}));
  }


  render() {
    return (
      <div className="App">
        <Header 
          toggleMobileMenu={this.toggleMobileMenu}
          menuOpened={this.state.menuOpened}
        />
        <Route exact path = "/" component={ TypeWriter } />
        <Routes />
      </div>
    );
  }
}

export default App;