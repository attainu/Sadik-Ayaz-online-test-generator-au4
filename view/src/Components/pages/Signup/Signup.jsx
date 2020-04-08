import React, { Component } from "react";
import "./Signup.css";
import Input from "../../basic/Input";
import Navbar from "../../basic/Navbar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    success: false,
  };

  signupHandler = (event) => {
    event.preventDefault();

    const { firstname, lastname, email, password } = this.state;

    const user = {
      firstname,
      lastname,
      email,
      password,
    };

    axios.post(`http://localhost:5000/signup`, { user }).then((res) => {
      if (res.data.status) {
        alert(res.data.message);
        this.setState({
          success: res.data.status,
        });
      } else {
        alert(res.data.message);
      }
    });
  };

  render() {

    if (this.state.success) {
      return <Redirect to="/sign-in"></Redirect>;
    }

    return (
      <div className="signup-wrapper">
        <Navbar/>
        <div className="signup-inner w3-container w3-center w3-animate-opacity">
          <h3>Sign-Up</h3>
          <hr></hr>
          <form onSubmit={this.signupHandler}>
            <Input
              value="Enter Firstname"
              label="First Name"
              type="text"
              handleChange={(event) => {
                this.setState({ firstname: event.target.value });
              }}
            />
            <Input
              value="Enter Lastname"
              label="Last Name"
              type="text"
              handleChange={(event) => {
                this.setState({ lastname: event.target.value });
              }}
            />
            <Input
              value="Enter Email"
              label="Email"
              type="email"
              handleChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
            <Input
              value="Enter Password"
              label="Password"
              type="password"
              handleChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
            <input
              type="submit"
              className="btn btn-dark btn-block"
              value="Sign-Up"
            />
          </form>
          <hr></hr>
          <p className="forgot-password text-center">
            Already have an account?<Link to="/sign-in">Sign-in here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
