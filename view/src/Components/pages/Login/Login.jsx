import React, { Component } from "react";
import Input from "../../basic/Input";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Navbar from "../../basic/Navbar";

class Login extends Component {
  state = {
    username: null,
    password: null,
    loggedin: null,
  };

  loginHandler = (event) => {
    event.preventDefault();

    let { username, password } = this.state;

    const user = {
      emailaddress: username,
      password,
    };

    axios.post("http://localhost:5000/login", { user }).then((response) => {
      if (response.data.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("firstname", response.data.data.firstname);
        localStorage.setItem("id", response.data.data._id);
        this.setState({
          loggedin: localStorage.getItem('token')
        });
      } else {
        alert(response.data.message);
      }
    });
  };

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/dashboard"></Redirect>;
    }
    return (
      
      <div className="signin-wrapper">
        <Navbar/>
        <div className="signin-inner w3-container w3-center w3-animate-opacity">
          <h3>Sign-In</h3>
          <hr></hr>
          <form onSubmit={this.loginHandler}>
            <Input
              value="Enter Email"
              label="Email"
              type="email"
              handleChange={(event) => {
                this.setState({ username: event.target.value });
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
              value="Sign-In"
            />
            <p className="forgot-password text-right">Forgot password?</p>
          </form>
          <hr></hr>
          <p className="forgot-password text-center">
            Don't have an account?<Link to="/sign-up">Sign-Up here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
