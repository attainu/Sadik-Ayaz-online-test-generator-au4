import React, { Component } from "react";
import axios from "axios";
import app from "../../../../appsBasic";
class TestHistory extends Component {
  state = {
    testHistory: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/user/read/${app.getUserId()}`)
      .then((response) => {
        this.setState({
          testHistory: response.data.tests.reverse(),
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Test History</h1>
        {this.state.testHistory ? (
          <div>
            {this.state.testHistory.map((item, index) => {
              return (
                <div className="card mt-3 mb-3" key={index}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-1 mx-auto my-auto text-center">
                        <h6>{index + 1}.</h6>
                      </div>
                      <div className="col-11">
                        <ul>
                          <li className="text-primary text-capitalize">
                            <h6>test name : {item.name}</h6>
                          </li>
                          <li className="text-danger text-capitalize">
                            <h6>date : {item.time}</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default TestHistory;
