import React, { Component } from 'react'
import '../styles.css'

export default class Login extends Component {
    render() {
        return (

            <div>
                <h1>LOGIN PAGE </h1>


                <form className="col-2">
                    <div className="email">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="password">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btnsignup">Submit</button>
                </form>
            </div>
        )

    }
};