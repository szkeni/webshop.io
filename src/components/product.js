import React, { Component } from 'react'


export default class Product extends Component {
    render() {
        return (
            <div className="product">
                <img src={`assets/images/${this.props.img}.png`} />
                <h2>{this.props.title}</h2>
                <button onClick={(event) => this.props.handleAddToCart(this.props.id)}>Add to cart</button>
            </div>
        )
    }
}
