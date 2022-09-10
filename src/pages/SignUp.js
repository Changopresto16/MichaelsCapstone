import React, { Component } from 'react'
import '../styles.css'

export default class SignUp extends Component {
  
  sendSignUpInfo = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirmPassword.value){ // making sure the password AND confirm password match
        return
    }

    const res = await fetch('http://127.0.0.1:5000/api/signup', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
    });
    const data = await res.json();
    console.log(data)
};
  
  
  render() {
    return (
      <div className="boxz">
        <h1>SIGNUP</h1>
        <form className="col-2" onSubmit={(e)=>{this.sendSignUpInfo(e)}}>
          
        <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" name='username'/>
                </div>
          <div className="box">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email"  />
          </div>
          <div className="box">
            <label for="name" className="form-label">Full Name</label>
            <input type="name" className="form-control" id="name" />
          </div>
          <div className="box">
            <label for="passworddiv" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="box">
            <label for="confirmpassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" />
          </div>
          <button type="submit" className="btnsignup">Submit</button>
        </form>

      </div>





    )
  }
}
