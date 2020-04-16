import React, { Component } from "react";
import axios from "axios";
import app from "../../../../appsBasic";
import Tests from "../../../model/collection/test";
import Test from "../../../model/test";

class TestHistory extends Component {
  state = {
    testHistory: null,
    published: true,
  };

  componentDidMount() {
    this.fetchTest();
  }
  fetchTest = () => {
    axios
      .get(`http://localhost:5000/user/read/${app.getUserId()}`)
      .then((response) => {
        const result=new Tests(response.data.tests.reverse());
        console.log(result.getTests());
        this.setState({
          testHistory: result.getTests(),
        });
      })
      .catch((error) => console.log(error));
  }

  unpublishTest = (e) =>{
    console.log(e.target.value);
    const testId = e.target.value;
    const test={
      _id: testId,
      publish: false
    };
    
    axios.put(`http://localhost:5000/test/update/${testId}`, test)
    .then((response)=>{
      console.log(response);
    }).catch((error) => console.log(error));
    return null;
  }
  publishTest = (e) =>{
    console.log(e.target.value);
    const testId = e.target.value;
    const test={
      _id: testId,
      publish: true
    };
    axios.put(`http://localhost:5000/test/update/${testId}`, test)
    .then((response)=>{
      console.log(response);
    }).catch((error) => console.log(error));
    return null;
  }
  testDetails =()=> {
    return this.state.testHistory.map((item, index) => {
      const testItem = new Test(item);
      return (
        <div className="card mt-3 mb-3" key={testItem.getId()}>
          <div className="card-body text-left">
            <div className="row">
              <div className="col-1 mx-auto my-auto text-center">
                <h6>{index + 1}.</h6>
              </div>
              <div className="col-7">
                <ul>
                  <li className="text-primary text-capitalize">
                    <h6>test name : {testItem.getName()}</h6>
                  </li>
                  <li className="text-danger text-capitalize">
                    <h6>date : {testItem.getTime()}</h6>
                  </li>
                </ul>
              </div>
              <div className="col-2 ml-auto">
                {testItem.getPublish() ? <button className="btn btn-outline-success" value={testItem.getId()} onClick={this.unpublishTest}>
                Unpublish
                </button> :
                <button className="btn btn-outline-primary" value={testItem.getId()} onClick={this.publishTest}>
                  Publish
                </button>
              }
              </div>
              <div className="col-2 ml-auto">
                <button className="btn btn-outline-success mr-2">
                  <i className="far fa-edit"></i>
                </button>
                <button className="btn btn-outline-danger">
                <i className="fas fa-trash"></i>
                </button>
            </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Test History</h1>
        {this.state.testHistory ? (
          <div>
            {this.testDetails()}
          </div>
        ) : null}
      </div>
    );
  }
}

 


export default TestHistory;
