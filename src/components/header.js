import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header>
        <FaBars />
        <Link to="/">
          <img src="/unnamed.png" alt="frog-logo" />
        </Link>
        <Link to="/cart">
          <BsCart2 />
        </Link>
      </header>
    );
  }
}
