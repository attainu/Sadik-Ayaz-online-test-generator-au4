import React, { Component } from "react";
import HistoryTable from "./HistoryTable";
import axios from "axios";
import app from "../../../../appsBasic";
import Tests from "../../../model/collection/test";
import Test from "../../../model/test";

class HistoryContainer extends Component {
  state = {
    testHistory: null,
    result: null,
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    axios
      .get(`http://localhost:5000/user/read/${app.getUserId()}`)
      .then((response) => {
        const result = new Tests(response.data.tests.reverse());
        console.log(result.getTests());
        this.setState({
          testHistory: result.getTests(),
          result: result,
        });
      })
      .catch((error) => console.log(error));
  };

  veiwHandler() {
    if (!this.state.testHistory) {
      return (
        <div>
          <h1>no test yet please creare one</h1>
        </div>
      );
    } else {
      return <HistoryTable totalTest={this.state.testHistory} />;
    }
  }

  render() {
    return <div>{this.veiwHandler()}</div>;
  }
}

export default HistoryContainer;
