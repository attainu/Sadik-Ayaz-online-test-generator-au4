import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

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
                    localStorage.setItem('token', res.data.token)
                    this.setState({
                        loggedin:true    
                    })
                }
            })
    }


    render() {
        if(this.state.loggedin)
        {
            return (
                <Redirect to="/home"></Redirect>
            )
        }
        return (
            <div className="container">
                <form onSubmit={this.Login}>
                    <input type="text" onChange={(e) => this.setState({ username: e.target.value })}></input> <br></br><br></br>
                    <input type="password" onChange={(e) => this.setState({ password: e.target.value })}></input><br></br><br></br>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}