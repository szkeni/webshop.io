import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './pages/cart'
import Home from './pages/home'
import Notfound from './pages/notfound'
import Productpage from './pages/productpage'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Home/>}/>
          <Route path='/cart' exact render={() => <Cart/>}/>
          <Route path='/:id' exact render={(props) => <Productpage id={props.match.params.id}/>}/>
          <Route path='*' render={() => <Notfound/>}/>
        </Switch>
      </Router>
    )
  }
}