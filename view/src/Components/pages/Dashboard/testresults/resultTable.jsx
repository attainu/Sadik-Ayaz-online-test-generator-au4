import React, { Component } from "react";
import axios from "axios";

class resultTable extends Component {
  state = {
    testId: this.props.id,
    testResult: [],
  };

  componentDidMount() {
    this.fetchResult();
  }

  fetchResult = async () => {
    await axios
      .get(`http://localhost:5000/result/read/${this.state.testId}`)
      .then((response) => {
        this.setState({
          testResult: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <table className="table table-striped .table-hover">
        <thead className="text-center text-capitalize">
          <tr>
            <th>sr</th>
            <th>student name</th>
            <th>Correct/total Question</th>
            <th>obtain/total score</th>
            <th>percentage %</th>
            <th>result</th>
          </tr>
        </thead>
        <tbody className="text-center text-capitalize">
          {this.state.testResult.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.studentName}</td>
                <td>
                  {item.totalNumberOfCorrectAnswer}/{item.totalNumberOfQuestion}
                </td>
                <td>
                  {item.obtainedPoints}/{item.totalPoints}
                </td>
                <td>{item.obtainedPercentage}%</td>
                {item.resultStatus ? (
                  <td><span className="badge badge-success text-capitalize">
                  pass
                </span></td>
                ) : (
                  <td><span className="badge badge-danger text-capitalize">
                  fail
                </span></td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default resultTable;

// {
//     "testId": "5ea0103c43f994641830e5a0",
//     "testResult": [
//       {
//         "_id": "5ea044a9a247042c40e979e0",
//         "testId": "5ea0103c43f994641830e5a0",
//         "studentId": "5ea043d373d3483f2c5fe0ab",
//         "studentName": "sadki",
//         "totalNumberOfQuestion": 5,
//         "totalNumberOfCorrectAnswer": 1,
//         "totalPoints": 10,
//         "obtainedPoints": 2,
//         "obtainedPercentage": 20,
//         "resultStatus": false,
//         "__v": 0
//       },
//       "{__v: 0, _id: \"5ea044e5a247042c40e979e2\", obtainedP…}",
//       "{__v: 0, _id: \"5ea04516a247042c40e979e4\", obtainedP…}",
//       "{__v: 0, _id: \"5ea04543a247042c40e979e6\", obtainedP…}",
//       "{__v: 0, _id: \"5ea048cb2936f838dc91b19e\", obtainedP…}",
//       "{__v: 0, _id: \"5ea054a383d1374cc0463f82\", obtainedP…}",
//       "{__v: 0, _id: \"5ea0558c4d6a0e58b839d31c\", obtainedP…}",
//       "{__v: 0, _id: \"5ea055c94d6a0e58b839d31e\", obtainedP…}",
//       "{__v: 0, _id: \"5ea059513c72044d9ca1a730\", obtainedP…}"
//     ]
//   }
