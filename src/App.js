import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import Productpage from "./pages/productpage";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: JSON.parse(window.localStorage.getItem("products")),
    };
  }

  componentDidMount() {
    window.addEventListener("itemsUpdated", () =>
      this.setState({
        cart: JSON.parse(window.localStorage.getItem("products")),
      })
    );
  }
  render() {
    return (
      <Router>
        <Header cart={JSON.parse(window.localStorage.getItem("products"))} />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route
            path="/:id"
            exact
            render={(props) => <Productpage id={props.match.params.id} />}
          />
          <Route path="*" render={() => <Notfound />} />
        </Switch>
      </Router>
    );
  }
}
