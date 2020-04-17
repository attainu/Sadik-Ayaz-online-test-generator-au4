import React, { Component } from "react";
import axios from "axios";
import "./Usertest.css";

class UserTEst extends Component {
  state = {
    testId: this.props.match.params.id,
    username: "sadik",
    testPaper: null,
    testName: null,
    userAnswer: null,
    userAnswerList: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/test/read/${this.state.testId}`)
      .then((response) => {
        const questions = response.data.questions;
        if (response.data.publish) {
          this.setState({
            testPaper: questions,
            testName: response.data.name,
            isPublished:response.data.publish
          });
        }
      })
      .catch((error) => console.log(error));
  }

  userAnswerHandler = (event) => {};

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mx-auto mt-3">
            <h5 className="text-capitalize text-left">
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              {this.state.username}
            </h5>
          </div>
          <div className="col-md-4 mx-auto mt-3">
            <h5 className="text-capitalize text-center">
              Test-Title : {this.state.testName}
            </h5>
          </div>
          <div className="col-md-4 mx-auto mt-3">
            <h5 className="text-capitalize text-right">Total-Marks : 20</h5>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          {this.state.testPaper
            ? this.state.testPaper.map((item, index) => {
                return (
                  <div className="card col-md-8 mx-auto mt-2" key={index}>
                    <div className="card-body">
                      <div className="row question-header">
                        <div className="col-12">
                          <label className="question-number">
                            Question {index + 1}
                          </label>
                        </div>
                        <div className="col-12">
                          <label className="question-text text-justify">
                            {item.question}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="question-choices-list text-justify text-capitalize">
                            <li className="question-choice">
                              <input
                                type="radio"
                                className="choice-input"
                                name="answer"
                                value={item.options.option1}
                              ></input>
                              <label className="question-choice-label">
                                {item.options.option1}
                              </label>
                            </li>
                            <li className="question-choice">
                              <input
                                type="radio"
                                className="choice-input"
                                name="answer"
                                value={item.options.option2}
                              ></input>
                              <label className="question-choice-label">
                                {item.options.option2}
                              </label>
                            </li>
                            <li className="question-choice">
                              <input
                                type="radio"
                                className="choice-input"
                                name="answer"
                                value={item.options.option3}
                              ></input>
                              <label className="question-choice-label">
                                {item.options.option3}
                              </label>
                            </li>
                            <li className="question-choice">
                              <input
                                type="radio"
                                className="choice-input"
                                name="answer"
                                value={item.options.option4}
                              ></input>
                              <label className="question-choice-label">
                                {item.options.option4}
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div className="row">
          <div className="col-md-3 mx-auto mt-3">
            <button className="btn btn-success btn-block"> SUBMIT TEST</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTEst;
