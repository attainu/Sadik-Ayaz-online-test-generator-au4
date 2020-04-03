import React, { Component } from "react";
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.Signup = this.Signup.bind(this);
        this.state = {
            success: false
        }
    }

    Signup(event) {
        event.preventDefault();
        const { firstname, lastname, email, password } = this.state;
        const user = {
            firstname,
            lastname,
            email,
            password
        }
        axios.post(`http://localhost:5000/signup`, { user }).then((res) => {
            if (res.data.status) {
                alert(res.data.message)
                this.setState({
                    success: res.data.status
                })
            }
            else {
                alert(res.data.message);
            }
        })

    }

    render() {
        if (this.state.success) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div className="auth-wrapper">
                <div className="auth-inner mt-5">
                    <form onSubmit={this.Signup}>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Firstname</label>
                            <input type="text" placeholder="firstname" className="form-control"
                                onChange={(e) => this.setState({ firstname: e.target.value })}></input>
                        </div>
                        <div className="form-group">
                            <label>Lastname</label>
                            <input type="text" placeholder="lastname" className="form-control"
                                onChange={(e) => this.setState({ lastname: e.target.value })}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" placeholder="email" className="form-control"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="password" className="form-control"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            ></input>
                        </div>
                        <input type="submit" value="Sign-Up" className="btn btn-dark btn-block"></input>
                    </form>
                    <hr></hr>
                    <p className="forgot-password text-center">
                        Already have an account?<Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        );
    }
}