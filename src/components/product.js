import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <div className="product">
        <Link to={`/${this.props.id}`}>
          <img src={`assets/images/${this.props.img}.png`} />
          <h2>{this.props.title}</h2>
        </Link>
        <button onClick={(event) => this.props.handleAddToCart(this.props.id)}>
          Add to cart
        </button>
      </div>
    );
  }
}
