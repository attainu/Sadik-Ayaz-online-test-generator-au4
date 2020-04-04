import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Navbar from '../../Components/Navbar';
import './Dashboard.css'

class Home extends Component {
  state = {
    token: localStorage.getItem("token"),
    name: localStorage.getItem("firstname"),
    id: localStorage.getItem("id"),
  };

  render() {
    if (this.state.token===null) {
      return <Redirect to="/sign-in"></Redirect>;
    }

    return (
      <div>
        <Navbar name={this.state.name} token = {this.state.token}/>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Home;
