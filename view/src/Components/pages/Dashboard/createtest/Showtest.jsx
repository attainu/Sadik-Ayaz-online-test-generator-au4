import React from "react";
const Showtest = (props) => {
  return (
    <div className="card">
      <h3>{props.testName}</h3>
      {props.testQuestion.map((item, index) => {
        return (
          <div className="card col-10 mt-3 mx-auto" key={index}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-1 text-left">
                  <label className="lable-class ">{index + 1}.</label>
                </div>
                <div className="col-md-11">
                  <p className="text-left">{item.question}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 text-left">
                  <label className="lable-class ">A.</label>
                </div>
                <div className="col-md-11 text-left">
                  <p>{item.options.option1}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 text-left">
                  <label className="lable-class ">B.</label>
                </div>
                <div className="col-md-11 text-left">
                  <p>{item.options.option2}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 text-left">
                  <label className="lable-class ">C.</label>
                </div>
                <div className="col-md-11 text-left">
                  <p>{item.options.option3}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 text-left">
                  <label className="lable-class ">D.</label>
                </div>
                <div className="col-md-11 text-left">
                  <p>{item.options.option4}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Showtest;
