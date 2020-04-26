import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const HistoryTable = (props) => {
  return (
    <React.Fragment>
      <h1 className="profile-heading">Previous Tests</h1>
      <div className="table-responsive">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th>SR.</th>
              <th>NAME</th>
              <th>DATE & TIME</th>
              <th>URL</th>
              <th>COPY</th>
              <th>STATUS</th>
              <th>CHANGE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {props.totalTest.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span className="badge badge-dark">{index + 1}</span>
                  </td>
                  <td>
                    <span className="text-capitalize">{item.name}</span>
                  </td>
                  <td>
                    <span className="">{item.time}</span>
                  </td>
                  {item.publish ? (
                    <td>
                      <a
                        href={item.url}
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.url}
                      </a>
                    </td>
                  ) : (
                    <td>
                      <span>-</span>
                    </td>
                  )}
                  <td>
                    <button
                      className="btn btn-sm btn-primary text-capitalize"
                      disabled={item.publish ? false : true}
                      onClick={() => {
                        navigator.clipboard.writeText(item.url);
                        swal("copied", "success", "success");
                      }}
                    >
                      copy
                    </button>
                  </td>
                  {item.publish ? (
                    <td>
                      <span className="badge badge-success text-capitalize">
                        published
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="badge badge-danger text-capitalize">
                        unpublished
                      </span>
                    </td>
                  )}
                  {item.publish ? (
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger text-capitalize"
                        onClick={() => {
                          props.unpublishTest(item._id, index);
                        }}
                      >
                        unpublish
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        className="btn btn-sm btn-outline-success text-capitalize"
                        onClick={() => {
                          props.publishTest(item._id, index);
                        }}
                      >
                        publish
                      </button>
                    </td>
                  )}
                  <td>
                    <Link to="/add-test">
                      {" "}
                      <button
                        className="btn btn-sm btn-outline-info mr-2"
                        disabled={item.publish ? true : false}
                        onClick={() => {
                          props.editTest(item.name, item._id);
                        }}
                      >
                        <i className="far fa-edit"></i>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger mr-2"
                      disabled={item.publish ? true : false}
                      onClick={() => {
                        props.deleteTest(item.name, item._id);
                      }}
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
    </React.Fragment>
  );
};

export default HistoryTable;
