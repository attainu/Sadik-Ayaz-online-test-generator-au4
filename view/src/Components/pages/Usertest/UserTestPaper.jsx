import React from "react";

const UserTestPaper = (props) => {
  console.log(props);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col mt-2 text-capitalize">
          <p>
            <i className="fa fa-user" aria-hidden="true"></i> {props.username}
          </p>
        </div>
        <div className="col mx-auto mt-2 text-capitalize">
          <p className="text-center">{props.testName}</p>
        </div>
        <div className="col mt-2 text-capitalize">
          <p className="text-right">20</p>
        </div>
      </div>
      <hr className="m-0"></hr>
      <div className="container">
        {props.testPaper.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-8 mx-auto mt-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row question-header">
                      <div className="col-12 question-number">
                        <label>Question {index + 1}</label>
                      </div>
                      <div className="col-12 question-text text-justify">
                        <label>{item.question}</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul className="question-choices-list text-justify text-capitalize">
                          <li className="question-choice">
                            <input
                              type="radio"
                              className="choice-input"
                              name="answer"
                              value={item.options.option1}
                            ></input>
                            <label className="question-choice-label">
                              {item.options.option1}
                            </label>
                          </li>
                          <li className="question-choice">
                            <input
                              type="radio"
                              className="choice-input"
                              name="answer"
                              value={item.options.option2}
                            ></input>
                            <label className="question-choice-label">
                              {item.options.option2}
                            </label>
                          </li>
                          <li className="question-choice">
                            <input
                              type="radio"
                              className="choice-input"
                              name="answer"
                              value={item.options.option3}
                            ></input>
                            <label className="question-choice-label">
                              {item.options.option3}
                            </label>
                          </li>
                          <li className="question-choice">
                            <input
                              type="radio"
                              className="choice-input"
                              name="answer"
                              value={item.options.option4}
                            ></input>
                            <label className="question-choice-label">
                              {item.options.option4}
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="row">
            <div className="col-3 mx-auto mt-3 mb-5 ">
                <button className="btn btn-block btn-primary">Submit Test</button>
            </div>
        </div>
      </div>
   
    </div>
  );
};

export default UserTestPaper;
