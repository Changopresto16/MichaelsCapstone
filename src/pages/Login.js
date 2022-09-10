import React, { Component } from 'react'
import '../styles.css'

export default class Login extends Component {
    sendLoginInfo = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:5000/api/login'

        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }

    };

    sendBasicAuth = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/token', {
            method: "POST",
            headers: { Authorization: `Bearer ${btoa(e.target.username.value + ":" + e.target.password.value)}` }
        });
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }
    };

    
    render() {
        return (

            <div>
                <h1>LOGIN PAGE </h1>


                <form className="col-2" onSubmit={(e) => { this.sendBasicAuth(e) }}>
                    <div className="email">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="username" className="form-control" id="username" aria-describedby="emailHelp" />

                    </div>
                    <div className="password">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btnsignup">Submit</button>
                </form>
            </div>
        )

    }
};