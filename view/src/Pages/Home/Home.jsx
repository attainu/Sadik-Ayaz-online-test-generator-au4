import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>home</h1>
                <Link to="/sign-in">Sign-In</Link> <br></br>
                <Link to="/sign-up">Sign-Up</Link>
            </div>
         );
    }
}
 
export default Home;