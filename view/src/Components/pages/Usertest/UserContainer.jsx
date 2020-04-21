import React, { Component } from "react";
import axios from "axios";
import "./Usertest.css";
import UserForm from "./UserForm";
import swal from "sweetalert";
import Error from "./Error";
import UserTestPaper from "./UserTestPaper";
import app from "../../../appsBasic";
import Questions from "../../model/collection/questions";
import Student from "../../model/collection/student";

class UserContainer extends Component {
  state = {
    username: app.getStudentname(),
    userId: app.getStudentId(),
    testId: this.props.match.params.id,
    isPublished: null,
    testName: null,
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
      axios
        .post(`http://localhost:5000/student/create`, {
          name: this.state.username,
          success: true,
        })
        .then((response) => {
          if (response.status === 200) {
            swal("Success!!", "redirected...", "success").then(() => {

              app.setIsDisplay(response.data.success);
              app.setStudentId(response.data._id);
              app.setStudentname(response.data.name);
              
              let studentDetails = {
                StudentId: response.data._id,
                StudentName: response.data.name,
              };
              
              const student = new Student(studentDetails);
              this.setState({
                username: student.getStudentDetails().StudentName,
                userId: student.getStudentDetails().StudentId,
              });
            });
          }
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
      return (
        <UserTestPaper
          {...this.state}
          answerHandler={this.answerHandler}
          submitTest={this.submitTest}
        ></UserTestPaper>
      );
    }
  };

  submitTest = async () => {
    let result = {
      testId: this.state.testId,
      testResponse: this.state.testPaper.getResult(),
    };

    await axios
      .post(`http://localhost:5000/result`, result)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          alert("success");
        }
      })
      .catch((error) => console.log(error));
  };

  answerHandler = (event, index) => {
    const answer = event.target.value;
    const questionId = event.target.name;
    this.state.testPaper.setResult(questionId, answer);
    this.setState({
      questionId: answer,
    });
  };

  render() {
    return <React.Fragment>{this.veiwHandler()}</React.Fragment>;
  }
}

export default UserContainer;
