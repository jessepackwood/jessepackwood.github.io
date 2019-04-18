import React from 'react';
import { Route } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Photography from '../Photography/Photography'

const Routes = () => {
  return (
    <div>
      <Route exact path='/About'component={ About }/>
      <Route path='/projects' component={ Projects } />
      <Route exact path='/photography' component={ Photography }/>
      <Route exact path='/contact' component={ Contact } />
    </div>
  )
}

export default Routes