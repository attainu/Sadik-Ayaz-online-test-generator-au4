import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

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
        <h1>Dashboard</h1>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default Home;
