import React, { Component } from "react";
import "./Result.css";
import app from "../../../../appsBasic";
import axios from "axios";
import TestList from "./testList";

class Result extends Component {
  state = {
    isExpand: false,
    testDetails: null,
    testId:null
  };

  expandHandler = (event) => {
    console.log(event.target.value);
    
    this.setState({
      isExpand: !this.state.isExpand,
    });
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    axios
      .get(`http://localhost:5000/user/read/${app.getUserId()}`)
      .then((response) => {
        this.setState({
          testDetails: response.data.tests,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  viewHandler = () => {
    console.log(this.state.testDetails);
    if (!this.state.testDetails) {
      return (
        <div>
          <h1>no test</h1>
        </div>
      );
    } else {
      return (
        <TestList
          isExpand={this.state.isExpand}
          expandHandler={this.expandHandler}
          testDetails={this.state.testDetails}
        >
        </TestList>
      );
    }
  };
  render() {
    return <React.Fragment>{this.viewHandler()}</React.Fragment>;
  }
}

export default Result;
