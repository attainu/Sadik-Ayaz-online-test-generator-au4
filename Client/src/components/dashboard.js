import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('firstname');
        const id = localStorage.getItem('id');
        let loggedin = true;
        if (token === null) {
            loggedin = false
        }
    }
    state = {

        loggedin,
        token,
        name,
        id
    }

    render() {
        if (this.state.loggedin === false) {
            return (
                <Redirect to="/login"></Redirect>
            )
        }

        return (
            <React.Fragment>
                < nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <div className="container-fluid">
                        <div className="navbar-nav mr-auto">
                            <Link className="navbar-brand" to="/dashboard">testmania</Link>
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <div className="navbar-nav mr-auto">
                                <Link className="navbar-brand text-capitalize" to="/user">hey {this.state.name}</Link>
                            </div>
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link text-dark link-button text-center">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Home;