import React, { Component } from "react";
import Showtest from "./Showtest";
import axios from "axios";

class AddQuestion extends Component {
  state = {
    testId: this.props.testid,
    question: null,
    option1: null,
    option2: null,
    option3: null,
    option4: null,
    answer: null,
    marks: 2,
    testQuestion: null,
  };

  questionHandler = async (event) => {
    event.preventDefault();
    let question = {
      testId: this.state.testId,
      question: this.state.question,
      options: {
        option1: this.state.option1,
        option2: this.state.option2,
        option3: this.state.option3,
        option4: this.state.option4,
      },
      answer: this.state.answer,
      marks: this.state.marks,
    };

    await axios
      .post("http://localhost:5000/question/create", { question })
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            question: null,
            option1: null,
            option2: null,
            option3: null,
            option4: null,
            answer: null,
            marks: 2,
          });
          alert("queston added succesfullly");
        }
      })
      .then(() => {
        axios
          .get(`http://localhost:5000/test/read/${this.state.testId}`)
          .then((response) => {
            const questions = response.data.questions;
            this.setState({
              testQuestion: questions,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="col-10 mx-auto">
        <div className="card mt-1 mb-3">
          <div className="card-body">
            <h3>Please Add Question</h3>
            <hr></hr>
            <form onSubmit={this.questionHandler}>
              <div className="row form-group">
                <div className="col-md-2">
                  <label className="lable-className">Question :</label>
                </div>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control user-input"
                    onChange={(event) =>
                      this.setState({ question: event.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-2 text-center">
                  <label className="lable-className">A.</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control user-input"
                    onChange={(event) =>
                      this.setState({ option1: event.target.value })
                    }
                  ></input>
                </div>
                <div className="col-md-2 text-center">
                  <label className="lable-className">B.</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control user-input"
                    onChange={(event) =>
                      this.setState({ option2: event.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-2 text-center">
                  <label className="lable-className">C.</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control user-input"
                    onChange={(event) =>
                      this.setState({ option3: event.target.value })
                    }
                  ></input>
                </div>
                <div className="col-md-2 text-center">
                  <label className="lable-className">D.</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control user-input"
                    onChange={(event) =>
                      this.setState({ option4: event.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-2 text-center">
                  <label className="lable-className">Answer</label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-control"
                    onChange={(event) => {
                      this.setState({ answer: event.target.value });
                    }}
                  >
                    <option>{this.state.option1}</option>
                    <option>{this.state.option2}</option>
                    <option>{this.state.option3}</option>
                    <option>{this.state.option4}</option>
                  </select>
                </div>
                <div className="col-md-2 text-center">
                  <label className="lable-className">Marks</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control user-input"
                    value={this.state.marks}
                    onChange={(event) =>
                      this.setState({ marks: event.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 ml-auto">
                  <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Add Question"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        {this.state.testQuestion ? (
          <Showtest
            testName={this.props.testname}
            testQuestion={this.state.testQuestion}
          ></Showtest>
        ) : null}
      </div>
    );
  }
}

export default AddQuestion;
