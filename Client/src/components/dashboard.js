import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        let loggedin = true;
        if (token === null) {
            loggedin = false
        }

        this.state = {

            loggedin,
            token
        }
    }

    logout() {
        localStorage.removeItem('token');
    }


    render() {
        if (this.state.loggedin === false) {
            return (
                <Redirect to="/login"></Redirect>
            )
        }

        return (
            <React.Fragment><nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                <div className="container-fluid">
                    <div className="navbar-nav mr-auto">
                        <Link className="navbar-brand" to="/">testmania</Link>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link text-dark link-button text-center">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>

                <div className="container">
                    <h1>dashboard</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;