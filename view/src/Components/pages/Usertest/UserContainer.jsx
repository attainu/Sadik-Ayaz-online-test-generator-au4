import React, { Component } from "react";
import axios from "axios";
import "./Usertest.css";
import UserForm from "./UserForm";
import swal from "sweetalert";
import Error from "./Error";
import UserTestPaper from "./UserTestPaper";
import app from "../../../appsBasic";
import Questions from "../../model/collection/questions";

class UserContainer extends Component {
  state = {
    username: null,
    testId: this.props.match.params.id,
    isPublished: null,
    testName: null,
    isDisplay: app.getIsDisplay(),
  };

  fetchTest = () => {
    axios
      .get(`http://localhost:5000/test/read/${this.state.testId}`)
      .then((response) => {
        const questions = [...response.data.questions];
        if (response.data.publish) {
          this.setState({
            testPaper: new Questions(questions),
            testName: response.data.name,
            isPublished: response.data.publish,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchTest();
  }

  inputHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  studentNameHandler = (event) => {
    event.preventDefault();
    if (!this.state.username) {
      swal("Username is Required", "something went wrong", "error");
    } else {
      swal("Success!!", "redirected...", "success").then(() => {
        this.setState({
          isDisplay: app.setIsDisplay(true),
        });
      });
    }
  };


  veiwHandler = () => {
    if (!this.state.isPublished) {
      return <Error></Error>;
    } else if (!app.getIsDisplay()) {
      return (
        <UserForm
          nameHandler={this.studentNameHandler}
          inputHandler={this.inputHandler}
        ></UserForm>
      );
    } else {
      return <UserTestPaper 
              {...this.state}
              answerHandler={this.answerHandler}
              submitTest={this.submitTest}
      ></UserTestPaper>;
    }
  };

  submitTest = () => {
  //  axios.post
  console.log(this.state.testPaper.getResult());
  }

  answerHandler = (event, index) =>{
    const answer = event.target.value;
    const questionId =event.target.name;
    this.state.testPaper.setResult(questionId, answer);
    this.setState({
      questionId : answer
    });
  }

  render() {
    return <div>{this.veiwHandler()}</div>;
  }
}

export default UserContainer;
