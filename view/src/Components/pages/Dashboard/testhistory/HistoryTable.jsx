import React from "react";
const HistoryTable = (props) => {
  return (
    <div>
      <h1 className="profile-heading">Previous Tests</h1>
      <table className="table table-hover text-capitalize">
        <thead className="text-center">
          <tr>
            <th scope="col">sr.</th>
            <th scope="col">name</th>
            <th scope="col">date&time</th>
            <th scope="col">url</th>
            <th scope="col">Copy url</th>
            <th scope="col">currunt status</th>
            <th scope="col">change status</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.totalTest.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.time}</td>
                {item.publish ? <td>url</td> : <td>-</td>}
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    disabled={item.publish ? false : true}
                  >
                    copy
                  </button>
                </td>
                {item.publish ? (
                  <td className="text-success">published</td>
                ) : (
                  <td className="text-danger">unpublished</td>
                )}
                {item.publish ? (
                  <td>
                    <button className="btn btn-sm btn-outline-danger">
                      unpublish
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="btn btn-sm btn-outline-success">
                      publish
                    </button>
                  </td>
                )}
                <td>
                  <button
                    className="btn btn-sm btn-outline-info mr-2"
                    disabled={item.publish ? true : false}
                  >
                    <i className="far fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger mr-2"
                    disabled={item.publish ? true : false}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
