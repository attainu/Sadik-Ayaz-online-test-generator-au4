import React from "react";
const Showtest = (props) => {
  return (
    <div className="card mb-5">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col text-capitalize text-dark text-left">
            <h5>title - {props.testName}</h5>
          </div>
          <div className="col  text-capitalize text-dark text-right">
            <h5> total marks : 20</h5>
          </div>
        </div>
        <hr></hr>
        <div className=" row mb-3">
        {props.testQuestion.map((item, index) => {
          return (
            <div className="card col-10 mt-3 mx-auto" key={index}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-1 text-left">
                    <label className="lable-class ">{index + 1}.</label>
                  </div>
                  <div className="col-md-11 text-left">
                    <p className=" text-justify">{item.question}</p>
                    <i class="fas fa-edit"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-left">
                    <label className="lable-class ">A.</label>
                  </div>
                  <div className="col-md-11 text-left text-capitalize">
                    <p>{item.options.option1}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-left">
                    <label className="lable-class ">B.</label>
                  </div>
                  <div className="col-md-11 text-left text-capitalize">
                    <p>{item.options.option2}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-left text-capitalize">
                    <label className="lable-class ">C.</label>
                  </div>
                  <div className="col-md-11 text-left text-capitalize">
                    <p>{item.options.option3}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-left">
                    <label className="lable-class ">D.</label>
                  </div>
                  <div className="col-md-11 text-left text-capitalize">
                    <p>{item.options.option4}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <div className="row">
          <div className="col-3 mx-auto mb-3">
            <button className="btn btn-block btn-success">Finish Test</button>
          </div>
          </div> 
      </div>
    </div>
  );
};

export default Showtest;
