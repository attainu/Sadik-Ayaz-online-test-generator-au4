import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {

  navigateTo = (path) => {
    this.props.history.push(path);
  };
  render() {
    return (
      <div className="col-md-2 sidebar-wrapper bg-light">
        <div className="navbar-nav mx-auto my-auto">
          <Link className="navbar-brand text-dark" to="/dashboard">
            <b> Test-Mania </b>
          </Link>
        </div>
        <hr></hr>
        <div>
          <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/dashboard')}}>
            Home
          </p>
          <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/add-test')}}>
            Create Test
          </p>
          <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/test-history')}}>
            Test History
          </p>
          <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/profile')}}>
            Profile
          </p>
          <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/results')}}>
            Results
          </p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
