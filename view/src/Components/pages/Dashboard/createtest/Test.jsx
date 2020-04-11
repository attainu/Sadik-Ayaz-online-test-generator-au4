import React, { Component } from "react";
import axios from "axios";
import app from "../../../../appsBasic";
import AddQuestion from "./Addquestion";

class Test extends Component {
  state = {
    testName: null,
    testId: null,
    id: app.getUserId()
  };

  testHandler = async (event) => {
    event.preventDefault();
    let test = {
      id: this.state.id,
      name: this.state.testName,
    };

    await axios
      .post("http://localhost:5000/test/create", { test })
      .then((response) => {
        this.setState({
          testId: response.data.test._doc._id,
        });

        alert("test created please add questions");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.testId ? (
            <AddQuestion
              testid={this.state.testId}
              testname={this.state.testName}
            ></AddQuestion>
        ) : (
          <div className="card mx-auto col-md-6 mt-5 card-dark color-blue-gradiant">
            <div className="card-body bubble-shadow">
              <form className="question-form" onSubmit={this.testHandler}>
                <h3  className="text-center heading-color">Enter Test Name Here.</h3>
                <div className="form-group">
                  <input
                    className="form-control text-capitalize"
                    type="text"
                    placeholder="enter test name here"
                    onChange={(event) => {
                      this.setState({ testName: event.target.value });
                    }}
                  ></input>
                </div>
                <input
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="create"
                />
              </form>
            </div>
          </div>
        )}
     </React.Fragment>
    );
  }
}

export default Test;
