import React, { Component } from "react";
import axios from "axios";
import "./Usertest.css";
import UserForm from "./UserForm";
import swal from "sweetalert";
import Error from "../../basic/Error";
import UserTestPaper from "./UserTestPaper";
import StudentResult from "./StudentResult";
import app from "../../../appsBasic";
import Questions from "../../model/collection/questions";

class UserContainer extends Component {
  state = {
    studentName: app.getStudentname(),
    userId: app.getStudentId(),
    testId: this.props.match.params.id,
    isPublished: null,
    testName: null,
    testPaper: null,
    questionCollection: [],
    totalMarks: null,
    showError: null,
    showUserForm: false,
    showUserTestPaper: app.getShowUserTestPaper(),
    studentResult: null,
    inputFields: {},
    error: {},
  };

  fetchTest = () => {
    axios
      .get(`/test/read/${this.state.testId}`)
      .then((response) => {
        const questions = [...response.data.questions];
        if (response.status === 200) {
          const questionPaper = new Questions(questions);
          this.setState({
            testPaper: questionPaper,
            testName: response.data.name,
            isPublished: response.data.publish,
            totalMarks: response.data.totalmarks,
            showError: !response.data.publish,
            showUserForm: response.data.publish,
          });
        }
      })
      .catch((error) => swal(error, "something went wrong", "error"));
  };

  componentDidMount() {
    this.fetchTest();
  }

  inputHandler = (event) => {
    let fields = this.state.inputFields;
    fields[event.target.name] = event.target.value;
    this.setState({
      inputFields: fields,
      studentName: event.target.value,
    });
  };

  validateForm = () => {
    let fields = this.state.inputFields;
    let errors = {};
    let formIsValid = true;
    if (!fields["student"]) {
      formIsValid = false;
      errors["student"] = "*Please enter your name.";
    }

    if (typeof fields["student"] !== "undefined") {
      if (!fields["student"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["student"] = "*Please enter alphabet characters only.";
      }
    }
    this.setState({
      error: errors,
    });
    return formIsValid;
  };

  studentNameHandler = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      axios
        .post(`/student/create`, {
          name: this.state.studentName,
          success: true,
        })
        .then((response) => {
          if (response.status === 200) {
            swal("Success!!", "redirected...", "success").then(() => {
              app.setShowUserTestPaper(response.data.success);
              app.setStudentId(response.data._id);
              app.setStudentname(response.data.name);
              this.setState({
                showUserTestPaper: true,
                userId: app.getStudentId(),
                studentName: app.getStudentname(),
                showUserForm: false,
              });
            });
          }
        });
    }
  };

  submitTest = async () => {
    let result = {
      testId: this.state.testId,
      userId: this.state.userId,
      totalMarks: this.state.totalmarks,
      username: this.state.studentName,
      testResponse: this.state.questionCollection,
    };

    await axios
      .post(`/result/create`, result)
      .then((response) => {
        if (response.status === 200) {
          swal("Test Submited!!", "redirected...", "success").then(() => {
            this.setState({
              showUserTestPaper: false,
              showUserForm: false,
              studentResult: response,
            });

            app.removeShowUserTestPaper();
            app.removeStudentId();
            app.removeStudentname();
          });
        } else {
          swal("Error", "something went wrong...", "error");
        }
      })
      .catch((error) => console.log(error));
  };

  answerHandler = (event, index, marks) => {
    const answer = event.target.value;
    const questionId = event.target.name;
    const answercollection = {
      _id: questionId,
      answer,
      marks,
    };
    this.state.testPaper.setResult(questionId, answer);
    this.setState({
      questionCollection: [...this.state.questionCollection, answercollection],
    });
  };

  veiwHandler = () => {
    if (this.state.showError === true) {
      return <Error message="sorry test not publish yet!!!"></Error>;
    }

    if (this.state.showUserForm === true) {
      return (
        <UserForm
          nameHandler={this.studentNameHandler}
          inputHandler={this.inputHandler}
          error={this.state.error.student}
        ></UserForm>
      );
    } else if (this.state.showUserTestPaper === true) {
      return (
        <UserTestPaper
          {...this.state}
          answerHandler={this.answerHandler}
          submitTest={this.submitTest}
        ></UserTestPaper>
      );
    } else {
      return (
        <div>
          <StudentResult
            studentResult={this.state.studentResult}
          ></StudentResult>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">TEST-MANIA</span>
        </nav>
        {this.veiwHandler()}
      </React.Fragment>
    );
  }
}

export default UserContainer;
