import React, { Component } from "react";
import HistoryTable from "./HistoryTable";
import app from "../../../../appsBasic";
import Tests from "../../../model/collection/test";
//import Test from "../../../model/test";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class HistoryContainer extends Component {
  state = {
    testHistory: null,
    result: null,
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    Axios.get(`http://localhost:5000/user/read/${app.getUserId()}`)
      .then((response) => {
        const result = new Tests(response.data.tests.reverse());
        //console.log(result.getTests());
        this.setState({
          testHistory: result.getTests(),
          result: result,
        });
      })
      .catch((error) => console.log(error));
  };

  editHandler = (testName, testId) => {
    console.log(`${testId} ${testName}`);
    app.setTestId(testId);
    app.setTestName(testName);
    return <Redirect from="/test-history" to="/add-test" />;
  };

  deleteHandler = async (testName, testId) => {
    await Axios.delete(`http://localhost:5000/test/delete/${testId}`)
      .then((response) => {
        if (response.status === 200) {
          app.removeTestId();
          app.removeTestName();
          this.fetchTest();
        }
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
      return (
        <HistoryTable
          totalTest={this.state.testHistory}
          editTest={this.editHandler}
          deleteTest={this.deleteHandler}
        />
      );
    }
  }

  render() {
    return <div className="container">{this.veiwHandler()}</div>;
  }
}

export default HistoryContainer;
