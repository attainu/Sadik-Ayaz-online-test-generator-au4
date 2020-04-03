import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                    <div className="container-fluid">
                    <div className="navbar-nav mr-auto">
                        <Link className="navbar-brand" to="/">testmania</Link>
                    </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-dark link-button text-center">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Signup" className="nav-link text-dark link-button text-center">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                     <h1>home page</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;