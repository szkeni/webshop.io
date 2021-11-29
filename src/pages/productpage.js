import React, { Component } from "react";
import Header from "../components/header";
import { data } from "./productsData";

export default class Productpage extends Component {
  render() {
    const product = data[this.props.id];
    return (
      <>
        <div id="productData">
          <img src={`/assets/images/frog-${Number(this.props.id) + 1}.png`} />
          <div>
            <h1>{product.title}</h1>
            <h3>${(Number(product.price) / 100).toFixed(2)}</h3>
          </div>
        </div>
      </>
    );
  }
}
