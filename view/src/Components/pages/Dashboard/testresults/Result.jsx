import React, { Component } from "react";
import "./Result.css";
class Result extends Component {
  state = {
    isExpand: false,
  };

  expandHandler = () => {
    this.setState({
      isExpand: !this.state.isExpand,
    });
  };

  render() {
    return (
      <div>
        <h1 className="result-heading">Results</h1>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                {this.state.isExpand ? (
                  <button
                    className="btn text-danger mr-auto"
                    onClick={this.expandHandler}
                  >
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                ) : (
                  <button
                    className="btn text-success ml-auto"
                    onClick={this.expandHandler}
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                )}
                <span>Test Name</span>
              </li>
              {this.state.isExpand ? (
                <table className="table table-striped .table-hover">
                  <thead>
                    <tr>
                      <th>sr</th>
                      <th>name</th>
                      <th>score</th>
                      <th>%</th>
                      <th>pass</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>sss</td>
                      <td>ss</td>
                      <td>ss</td>
                      <td>sss</td>
                      <td>sss</td>
                    </tr>
                    <tr>
                      <td>sss</td>
                      <td>ss</td>
                      <td>ss</td>
                      <td>sss</td>
                      <td>sss</td>
                    </tr>
                    <tr>
                      <td>sss</td>
                      <td>ss</td>
                      <td>ss</td>
                      <td>sss</td>
                      <td>sss</td>
                    </tr>
                    <tr>
                      <td>sss</td>
                      <td>ss</td>
                      <td>ss</td>
                      <td>sss</td>
                      <td>sss</td>
                    </tr>
                  </tbody>
                </table>
              ) : null}
              <li className="list-group-item">abc</li>
              <li className="list-group-item">abc</li>
              <li className="list-group-item">abc</li>
              <li className="list-group-item">abc</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
