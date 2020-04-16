import React, { Component } from "react";
import TestForm from "./testForm";
import QuestionForm from "./QuestionForm";
import Showtest from "./Showtest";
import PublishTest from "./PublishTest";
import Axios from "axios";
import app from "../../../../appsBasic";
class AddTest extends Component {
  state = {
    userId: app.getUserId(),
    testName: app.getTestName(),
    isPublished: false,
    testId: app.getTestId(),
    question: null,
    option1: null,
    option2: null,
    option3: null,
    option4: null,
    answer: null,
    marks: null,
    questionPaper: null
  };

  componentDidMount() {
    Axios.get(`http://localhost:5000/test/read/${app.getTestId()}`)
      .then((response) => {
        this.setState({
          questionPaper: [...response.data.questions],
        });
      })
      .catch((error) => console.log(error));
  }

  addTestHandler = async (event) => {
    event.preventDefault();

    const testDetails = {
      id: this.state.userId,
      name: this.state.testName,
      publish: this.state.isPublished,
    };

    await Axios.post("http://localhost:5000/test/create", testDetails)
      .then((response) => {
        app.setTestId(response.data.test._doc._id);
        app.setTestName(response.data.test._doc.name);
        this.setState({
          testId: response.data.test._doc._id,
          testName: response.data.test._doc.name,
        });
        alert("success test added");
      })
      .catch((error) => console.log(error));
  };

  addQuestionHandler = async (event) => {
    event.preventDefault();
    const question = {
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

    await Axios.post("http://localhost:5000/question/create", question)
      .then((response) => {
        if (response.status === 200) {
          alert("queston added succesfullly");
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  testInputHandler = (event) => {
    this.setState({
      testName: event.target.value,
    });
  };

  questionInputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  questionEditHandler = (questionId) => {
    alert(`edit handler ${questionId}`);
  };

  questionDeleteHandler = async (questionId) => {
    await Axios.delete(`http://localhost:5000/question/delete/${questionId}`)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  saveHandler = () => {
    app.removeTestName();
    app.removeTestId();
    this.setState({
      testName: null,
      testId: null,
    });
    alert("test saved successfully");
    window.location.reload();
  };

  saveAndPublishHandler = async () => {
    const test = {
      _id: app.getTestId(),
      publish: true,
    };

    await Axios.put(
      `http://localhost:5000/test/update/${app.getTestId()}`,
      test
    )
      .then((response) => {
        app.setTestUrl(`${window.location.origin}/test/${app.getTestId()}`)
        this.setState({
          isPublished: response.data.publish,
        });
        app.removeTestName();
        app.removeTestId();
      })
      .catch((error) => console.log(error));

    alert("successfully save & publish");
  };

  viewHandler = () => {
    const options = {
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4,
    };

    if (!this.state.testId) {
      return (
        <TestForm
          addTest={this.addTestHandler}
          testInput={this.testInputHandler}
        />
      );
    } else if (this.state.isPublished) {
      return <PublishTest/>;
    } else {
      return (
        <React.Fragment>
          <QuestionForm
            addQuestion={this.addQuestionHandler}
            questionInput={this.questionInputHandler}
            optionsValue={options}
          ></QuestionForm>
          {!this.state.questionPaper ? null : (
            <Showtest
              testName={this.state.testName}
              testQuestion={this.state.questionPaper}
              editQuestion={this.questionEditHandler}
              deleteQuestion={this.questionDeleteHandler}
              save={this.saveHandler}
              saveAndPublish={this.saveAndPublishHandler}
            />
          )}
        </React.Fragment>
      );
    }
  };

  render() {
    return <div>{this.viewHandler()}</div>;
  }
}

export default AddTest;
