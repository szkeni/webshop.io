import React, { Component } from 'react'
import { data } from './productsData'

export default class Productpage extends Component {
    render() {
        const product = data[this.props.id]
        return (
            <div>
                <h1>{product.title}</h1>
                <h3>{product.price}</h3>
            </div>
        )
    }
}
