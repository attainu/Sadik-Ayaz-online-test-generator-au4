import React from "react";
import TestTable from './resultTable';

const testList = (props) => {
  return (
    <div>
      <h1 className="result-heading">Results</h1>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {props.testDetails.getTests().map((item,index) => {
              console.log("props =",props.isExpand, " item =",item._id);
              return (
                <li className="list-group-item" key={index} name={item._id}>
                  {props.isExpand === item._id ? (
                    <button
                      className="btn text-danger mr-auto"
                      value={item._id}
                      onClick={props.closeResult}
                    >
                    close
                      {/* <i className="fa fa-minus" id={item._id}  aria-hidden="true"></i> */}
                    </button>
                  ) : (
                    <button
                      className="btn text-success ml-auto"
                      value={item._id}
                      onClick={props.openResult}
                    >
                    open
                      {/* <i className="fa fa-plus" id={item._id} aria-hidden="true"></i> */}
                    </button>
                  )}
                  <span className="text-capitalize">{item.name}</span>
                  {props.isExpand === item._id ? <TestTable key={item._id} id={item._id}></TestTable> : null}
                </li>
              );
            })}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default testList;
