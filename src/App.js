import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Notfound from './pages/notfound'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Home/>}/>
          <Route path='*' render={() => <Notfound/>}/>
        </Switch>
      </Router>
    )
  }
}