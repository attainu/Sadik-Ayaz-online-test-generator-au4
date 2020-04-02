import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
                <Redirect to="/"></Redirect>
            )
        }
        
        return (
            <React.Fragment>
                <div className="abc">
                    <h1 className="mt-5">hello world</h1>
                    <button onClick={this.logout}>logout</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;