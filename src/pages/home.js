import React, { Component } from "react";
import Categories from "../components/categories";
import Header from "../components/header";
import ProductContainer from "../components/product-container";
import Footer from "../components/footer";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };

    this.handleAddToCart=this.handleAddToCart.bind(this)

  }
  handleAddToCart = (id) => {
    const newCart = [...this.state.cart];
    newCart.push(id);
    this.setState({ cart: newCart });
    console.log(id)
  };
  render() {
    return (
      <>
        <Header />
        <Categories />
        <ProductContainer handleAddToCart={this.handleAddToCart}/>
        <Footer />
      </>
    );
  }
}
