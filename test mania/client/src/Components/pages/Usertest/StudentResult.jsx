import React from "react";

const StudentResult = (props) => {
  if (props.studentResult) {
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto mt-5">
          <div className="card">
            <div className="card-header text-center">Result</div>
            <div className="card-body m-0 p-0">
              {props.studentResult ? (
                <table className="table table-bordered text-capitalize m-0 p-0">
                  <tbody>
                    <tr>
                      <th scope="row">student name</th>
                      <td>{props.studentResult.data.response.studentName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Correct Question</th>
                      <td>
                        {
                          props.studentResult.data.response
                            .totalNumberOfCorrectAnswer
                        }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">total Question</th>
                      <td>
                        {
                          props.studentResult.data.response
                            .totalNumberOfQuestion
                        }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">obtain score</th>
                      <td>
                        {props.studentResult.data.response.obtainedPoints}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">total score</th>
                      <td>{props.studentResult.data.response.totalPoints}</td>
                    </tr>
                    <tr>
                      <th scope="row">percentage %</th>
                      <td>
                        {props.studentResult.data.response.obtainedPercentage}%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">result</th>
                      {props.studentResult.data.response.resultStatus ? (
                        <td className="text-success font-weight-bold">Pass</td>
                      ) : (
                        <td className="text-danger font-weight-bold">Fail</td>
                      )}
                    </tr>
                  </tbody>
                </table>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentResult;

// obtainedPercentage: 80
// obtainedPoints: 8
// resultStatus: true
// studentId: "5ea2869d68fca73c288afa5e"
// studentName: "sadik"
// testId: "5ea0103c43f994641830e5a0"
// totalNumberOfCorrectAnswer: 4
// totalNumberOfQuestion: 5
// totalPoints: 10
