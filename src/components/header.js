import React, { Component } from 'react'
import {FaBars} from 'react-icons/fa'
import {BsCart2} from 'react-icons/bs'
export default class Header extends Component {
    render() {
        return (
            <header>
                <FaBars />
                <img src="/unnamed.png" alt="frog-logo"/>
                <BsCart2 />
            </header>
        )
    }
}
