import React from "react";
import TestTable from './resultTable';

const testList = (props) => {
  return (
    <div>
      <h1 className="result-heading">Results</h1>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {props.testDetails.map((item,index) => {
              return (
                <li className="list-group-item" key={index} name={item._id}>
                  {props.isExpand ? (
                    <button
                      className="btn text-danger mr-auto"
                      value={item._id}
                      onClick={props.expandHandler}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  ) : (
                    <button
                      className="btn text-success ml-auto"
                      value={item._id}
                      onClick={props.expandHandler}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  )}
                  <span className="text-capitalize">{item.name}</span>
                  {props.isExpand ? <TestTable id={item._id}></TestTable> : null}
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
