import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from '../Header/Header'
import TypeWriter from '../TypeWriter/TypeWriter'
import Routes from '../Routes/Routes'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header 
      />
      <Route exact path = "/" component={ TypeWriter } />
      <Routes />
    </div>
  );
}

export default App;