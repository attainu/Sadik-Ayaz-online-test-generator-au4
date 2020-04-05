import React, { Component } from "react";
import Input from "./Input";
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
      <div className="row">
        <form className="col-md-4" onSubmit={this.testHandler}>
          <Input
            label="test name"
            handleChange={(event) =>
              this.setState({ testName: event.target.value })
            }
          />
          <input type="submit" value="create" />
        </form>
        <br></br>
        {this.state.testId ? (
          <form className="col-md-4" onSubmit={this.questionHandler}>
            <Input
              label="Question"
              handleChange={(event) =>
                this.setState({ question: event.target.value })
              }
            />
            <Input
              label="A"
              handleChange={(event) =>
                this.setState({ option1: event.target.value })
              }
            />
            <Input
              label="B"
              handleChange={(event) =>
                this.setState({ option2: event.target.value })
              }
            />
            <Input
              label="C"
              handleChange={(event) =>
                this.setState({ option3: event.target.value })
              }
            />
            <Input
              label="D"
              handleChange={(event) =>
                this.setState({ option4: event.target.value })
              }
            />
            <select
              onChange={(event) =>
                this.setState({ answer: event.target.value })
              }
            >
              <option>{this.state.option1}</option>
              <option>{this.state.option2}</option>
              <option>{this.state.option3}</option>
              <option>{this.state.option4}</option>
            </select>
            <br></br>
            <Input
              label="marks"
              handleChange={(event) =>
                this.setState({ marks: event.target.value })
              }
            />
            <input type="submit"></input>
          </form>
        ) : null}
      </div>
    );
  }
}

export default Test;
