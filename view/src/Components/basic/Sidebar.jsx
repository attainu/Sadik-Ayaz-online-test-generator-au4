import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
class Sidebar extends Component {
  // navigateTo = (path) => {
  //   this.props.history.push(path);
  // };

  render() {
    return (
      // <div className="navbar-nav mx-auto my-auto">
      //   <NavLink to="/dashboard">hey</NavLink>
      // <div>
      //   <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/dashboard')}}>
      //     Home
      //   </p>
      //   <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/add-test')}}>
      //     Create Test
      //   </p>
      //   <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/test-history')}}>
      //     Test History
      //   </p>
      //   <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/profile')}}>
      //     Profile
      //   </p>
      //   <p className="nav-link dash-navbar" onClick={()=>{this.navigateTo('/results')}}>
      //     Results
      //   </p>
      // </div>
      // </div>
      //     <div>
      //     <aside id="basicSidebar" class="pmd-sidebar  pmd-z-depth" role="navigation">
      //     <ul class="nav flex-column pmd-sidebar-nav text-light">
      //     <li class="nav-item">
      //                     <a class="nav-link" href="#">
      //                         <span class="media-body">View Profile</span>
      //                     </a>
      //                 </li>
      //                 <li class="nav-item">
      //                     <a class="nav-link" href="#">
      //                         <span class="media-body">View Profile</span>
      //                     </a>
      //                 </li>
      //                 <li class="nav-item">
      //                     <a class="nav-link" href="#">
      //                         <span class="media-body">View Profile</span>
      //                     </a>
      //                 </li>
      //     </ul>
      // </aside>
      // </div>
      <div className="sticky-top" style={{top:"56px"}}>
        <ul className="list-group-flush">
          <li className="list-group-item">
            <NavLink
              to="/dashboard"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/add-test"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Add Test
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/test-history"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Test History
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/profile"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Profile
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/results"
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Results
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
