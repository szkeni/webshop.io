import React, { Component } from "react";
import { MdClose } from "react-icons/md";
import Header from "../components/header";

export default class Cart extends Component {
  state = {
    products:
      this.props.products ||
      JSON.parse(window.localStorage.getItem("products")) ||
      [],
  };
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>Cart</h1>
          <hr />
          {this.state.products.length > 0 ? (
            this.state.products.map((product, p) => (
              <div key={`cartEntry-${p}`} className="cartEntry">
                <span>{product.title}</span>
                <span>{product.qty}</span>
                <span>
                  ${(product.qty * (Number(product.price) / 100)).toFixed(2)}
                </span>
                <MdClose style={{color: 'red', cursor: 'pointer'}}
                  onClick={() => {
                    let newarray = [...this.state.products];
                    newarray = newarray.filter(
                      (item) => item.title !== newarray[p].title
                    );
                    this.setState({ products: newarray }, () => {
                        window.localStorage.setItem("products", JSON.stringify(newarray));
                      });
                  }}
                />
              </div>
            ))
          ) : (
            <span>No product</span>
          )}
          <hr />
          <button className="cho">Check out</button>
        </div>
      </>
    );
  }
}
