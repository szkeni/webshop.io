import React, { Component } from "react";
import Categories from "../components/categories";
import Header from "../components/header";
import ProductContainer from "../components/product-container";
import Footer from "../components/footer";
import { data } from "./productsData";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: JSON.parse(window.localStorage.getItem("products")) || [],
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart = (id) => {
    const newCart = [...this.state.cart];
    if (newCart.find((product) => product.title === data[id].title))
      newCart[newCart.findIndex((product) => product.title === data[id].title)]
        .qty++;
    else newCart.push({ ...data[id], qty: 1 });
    this.setState({ cart: newCart }, () => {
      window.localStorage.setItem("products", JSON.stringify(newCart));
      window.dispatchEvent(new CustomEvent("itemsUpdated"));
    });
    console.log(id);
  };
  render() {
    return (
      <>
        <Categories />
        <ProductContainer handleAddToCart={this.handleAddToCart} />
        <Footer />
      </>
    );
  }
}
