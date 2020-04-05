import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Test from "../../Components/Test";
import "./Dashboard.css";

class Home extends Component {
  state = {
    token: localStorage.getItem("token"),
    name: localStorage.getItem("firstname"),
    id: localStorage.getItem("id"),
    click: false,
  };

  clickHandler = (event) => {
    this.setState({
      click: !this.state.click,
    });
  };

  render() {
    if (this.state.token === null) {
      return <Redirect to="/sign-in"></Redirect>;
    }

    return (
      <div>
        <Navbar name={this.state.name} token={this.state.token} />
        <h1>Dashboard</h1>
        <button onClick={this.clickHandler}>create test</button>
        {this.state.click ? <Test/> : null}
      </div>
    );
  }
}

export default Home;
