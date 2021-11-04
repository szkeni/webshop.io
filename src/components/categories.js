import React, { Component } from 'react'
import categories from './categories.json'

export default class Categories extends Component {
    render() {
        return (
            <div id="categories">
                {categories.map((category, index) => <img key={`category-${index}`} src={`/assets/images/${category.img}.png`}/>)}
            </div>
        )
    }
}
