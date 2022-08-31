import React, { Component, useEffect } from 'react'
import '../styles.css'

export default class SignUp extends Component {
  render() {
    return (
      <div className="boxz">
        <h1>SIGNUP</h1>
        <form className="col-2">
          <div className="box">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email1"  />
          </div>
          <div className="box">
            <label for="name" className="form-label">Full Name</label>
            <input type="name" className="form-control" id="name1" />
          </div>
          <div className="box">
            <label for="passworddiv" className="form-label">Password</label>
            <input type="password" className="form-control" id="password1" />
          </div>
          <div className="box">
            <label for="confirmpassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm1" />
          </div>
          <button type="submit" className="btnsignup">Submit</button>
        </form>

      </div>





    )
  }
}
