import React, { Component } from "react";
import Input from "../../../basic/Input";
import axios from "axios";

class Test extends Component {
  state = {
    testName: null,
    testId: null,
    id: localStorage.getItem("id"),
    question: null,
    option1: null,
    option2: null,
    option3: null,
    option4: null,
    answer: null,
    marks: null,
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
          alert("queston added succesfullly");
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        {this.state.testId ? (
          <div className="card mx-auto mt-5 col-md-10">
            <div className="card-body">
              <h3>Please Add Question</h3>
              <hr></hr>
              <form onSubmit={this.questionHandler}>
                <div className="row form-group">
                  <div className="col-md-2">
                    <label className="lable-class">Question :</label>
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
                    <label className="lable-class">A.</label>
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
                    <label className="lable-class">B.</label>
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
                    <label className="lable-class">C.</label>
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
                    <label className="lable-class">D.</label>
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
                    <label className="lable-class">Answer</label>
                  </div>
                  <div className="col-md-4">
                    <select className="form-control">
                      <option>{this.state.option1}</option>
                      <option>{this.state.option2}</option>
                      <option>{this.state.option3}</option>
                      <option>{this.state.option4}</option>
                    </select>
                  </div>

                  <div className="col-md-4 ml-auto">
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
        ) : (
          <div className="card mx-auto col-md-6 mt-5">
            <div className="card-body">
              <form className="" onSubmit={this.testHandler}>
                <h3>Enter Test Name Here.</h3>
                <Input
                  handleChange={(event) =>
                    this.setState({ testName: event.target.value })
                  }
                />
                <input
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="create"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Test;
