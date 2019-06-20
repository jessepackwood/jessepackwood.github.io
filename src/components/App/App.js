import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from '../Header/Header'
import TypeWriter from '../TypeWriter/TypeWriter'
import Gallery from '../Gallery/Gallery'
import Routes from '../Routes/Routes'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header 
      />
      <Route exact path = "/" component={ Gallery } />
      <Routes />
    </div>
  );
}

export default App;