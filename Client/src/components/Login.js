import React, { Component } from "react";
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        let loggedin = false;
        this.state = {
            username: '',
            password: '',
            loggedin
        }
        this.Login = this.Login.bind(this);
    }

    Login(event) {
        event.preventDefault()
        let { username, password } = this.state;
        const user = {
            emailaddress: username,
            password
        };

        axios.post(`http://localhost:5000/login`, { user })
            .then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('firstname', res.data.data.firstname);
                    localStorage.setItem('id', res.data.data._id);
                    this.setState({
                        loggedin: true
                    })
                }
                else {
                    alert("wrong password");
                }
            })
    }


    render() {
        if (this.state.loggedin) {
            return (
                <Redirect to="/dashboard"></Redirect>
            )
        }
        return (
            <div className="auth-wrapper">
                <div className="auth-inner mt-5">
                    <form onSubmit={this.Login}>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" className="form-control" placeholder="Enter email"
                                onChange={(e) => this.setState({ username: e.target.value })}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                onChange={(e) => this.setState({ password: e.target.value })}>
                            </input>
                        </div>
                        <input type="submit" className="btn btn-dark btn-block"></input>
                        <p className="forgot-password text-right">
                            Forgot password?
                            </p>
                    </form>
                    <hr></hr>
                    <p className="forgot-password text-center">
                        Dont have an account?<Link to="/signup">Sign up here</Link>
                    </p>
                </div>
            </div>
        );
    }
}