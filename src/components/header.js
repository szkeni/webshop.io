import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

export default class Header extends Component {
  render() {
    let qty =
      this.props.cart &&
      this.props.cart
        .map((cartItem) => cartItem.qty)
        .reduce((a, b) => a + b, 0);

    return (
      <header>
        <FaBars />
        <Link to="/">
          <img src="/unnamed.png" alt="frog-logo" />
        </Link>
        <Link to="/cart">
          <Badge badgeContent={qty} color="primary">
            <BsCart2 />
          </Badge>
        </Link>
      </header>
    );
  }
}
