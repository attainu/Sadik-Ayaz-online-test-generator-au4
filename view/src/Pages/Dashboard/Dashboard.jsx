import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Test from "../../Components/Test";
import "./Dashboard.css";
import Homepage from "../../Components/main/Home";
import Result from "../../Components/main/Result";
import TestHistory from "../../Components/main/TestHistory";
import Profile from "../../Components/main/Profile";
class Home extends Component {
  state = {
    token: localStorage.getItem("token"),
    name: localStorage.getItem("firstname"),
    id: localStorage.getItem("id"),
    routes: {
      home: true,
      createTest: false,
      testHistory: false,
      profile: false,
      results: false,
    },
  };

  homeHandler = (event) => {
    this.setState({
      routes: {
        home: true,
        createTest: false,
        testHistory: false,
        profile: false,
        results: false,
      },
    });
  };

  createTestHandler = (event) => {
    this.setState({
      routes: {
        home: false,
        createTest: true,
        testHistory: false,
        profile: false,
        results: false,
      },
    });
  };

  testHistoryHandler = (event) => {
    this.setState({
      routes: {
        home: false,
        createTest: false,
        testHistory: true,
        profile: false,
        results: false,
      },
    });
  };

  profileHandler = (event) => {
    this.setState({
      routes: {
        home: false,
        createTest: false,
        testHistory: false,
        profile: true,
        results: false,
      },
    });
  };

  resultsHandler = (event) => {
    this.setState({
      routes: {
        home: false,
        createTest: false,
        testHistory: false,
        profile: false,
        results: true,
      },
    });
  };

  render() {
    if (this.state.token === null) {
      return <Redirect to="/sign-in"></Redirect>;
    
    }
    

    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            homeHandler={this.homeHandler}
            createTestHandler={this.createTestHandler}
            testHistoryHandler={this.testHistoryHandler}
            profileHandler={this.profileHandler}
            resultsHandler={this.resultsHandler}
          ></Sidebar>
          <div className="col md-10" style={{ padding: "0px" }}>
            <Navbar name={this.state.name} token={this.state.token} />
            {this.state.routes.createTest ? <Test /> : null}
            {this.state.routes.home ? <Homepage /> : null}
            {this.state.routes.profile ? <Profile /> : null}
            {this.state.routes.results ? <Result /> : null}
            {this.state.routes.testHistory ? <TestHistory /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
