import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {

  if (props.token == null) {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <div className="navbar-nav mr-auto">
            <Link className="navbar-brand" to="/">
              Test-Mania
            </Link>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-link text-dark link-button text-center"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-link text-dark link-button text-center"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );

  } 
  else {
    
    return (
      <nav className="navbar navbar-expand-lg bg-light sticky-top nav-dashboard">
        <div className="container-fluid">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to="/dashboard"
                className="nav-link text-dark text-center text-capitalize"
              >
                Hey {props.name}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/logout"
                className="nav-link text-dark  text-center"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
