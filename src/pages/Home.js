import React, { Component } from 'react'
import "../styles.css"

const dogPicture = new URL("./Images/dog.png", import.meta.url)


export default class Home extends Component {
    render() {
        return (


            <div className="homebox">
                <h1>Home Page</h1>
                <img src={dogPicture} className="dogpic" />
                <h2>“The quieter you become, the more you are able to hear”  -Rumi</h2>


            </div>
        )
    }
}

