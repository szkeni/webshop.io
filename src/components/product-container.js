import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import products from "./products.json";
import Product from "./product";

export default class ProductContainer extends Component {
  componentDidMount() {
    console.log(document.querySelector(".carousel > .slider-wrapper > .slider.animated"));
  }
  render() {
    return (
      <>
        <Carousel>
          {products.map((product, index) => (
            <Product
              key={`product-${index}`}
              id= {index}
              img={product.img}
              title={product.title}
              handleAddToCart={this.props.handleAddToCart}
            />
          ))}
        </Carousel>
      </>
    );
  }
}
