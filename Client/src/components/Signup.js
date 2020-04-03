import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

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
            <div>
                <form onSubmit={this.Signup}>
                    <input type="text" placeholder="firstname"
                        onChange={(e) => this.setState({ firstname: e.target.value })}></input>
                    <input type="text" placeholder="lastname"
                        onChange={(e) => this.setState({ lastname: e.target.value })}
                    ></input>
                    <input type="email" placeholder="email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>
                    <input type="password" placeholder="password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    ></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}