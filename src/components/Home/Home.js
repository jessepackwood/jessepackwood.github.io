import React, { Component } from 'react';
import Header from '../Header/Header'
import Typewriter from '../TypeWriter/TypeWriter'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Typewriter />
      </div>
    );
  }
}

export default Home;