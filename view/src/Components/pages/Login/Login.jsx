import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import app from "../../../appsBasic";
import "./Login.css";

class Login extends Component {
  state = {
    username: null,
    password: null,
    loggedin: null,
  };

  loginHandler = async (event) => {
    event.preventDefault();

    let { username, password } = this.state;

    const user = {
      emailaddress: username,
      password,
    };

    await axios
      .post("http://localhost:5000/login", { user })
      .then((response) => {
        if (response.data.status === 200) {
          app.setToken(response.data.token);
          app.setName(
            `${response.data.data.firstname} ${response.data.data.lastname}`
          );
          app.setUserId(response.data.data._id);

          this.setState({
            loggedin: app.getToken(),
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
        <div className="signin-inner">
          <h3>Sign-In</h3>
          <hr></hr>
          <form onSubmit={this.loginHandler}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="ex. bruce@wyane.com"
                autoComplete="current-password"
                onChange={(event) => {
                  this.setState({ username: event.target.value });
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="password"
                className="form-control"
                placeholder="enter password"
                autocomplete="current-password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              ></input>
            </div>
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
