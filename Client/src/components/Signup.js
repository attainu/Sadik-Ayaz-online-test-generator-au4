import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        
        const { handleFirstName, handleLastName,handleEmail,handlePassword,handleSignup } = this.props

        return (
            < React.Fragment >
            <div className="auth-wrapper">
                <div className="auth-inner">

                    <form onSubmit={handleSignup}>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" 
                            onChange={handleFirstName}
                            />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name"
                            onChange={handleLastName}
                             />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                            onChange={handleEmail}
                             />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                            onChange={handlePassword}
                             />
                        </div>

                        <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <Link to="/sign-in">sign in?</Link>
                        </p>
                    </form>
                </div>
            </div>
            </React.Fragment >
        );
    }
}