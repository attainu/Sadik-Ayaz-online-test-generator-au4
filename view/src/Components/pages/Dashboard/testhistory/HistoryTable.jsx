import React from "react";
const HistoryTable = (props) => {
  return (
    <React.Fragment>
      <h1 className="profile-heading">Previous Tests</h1>
      <table className="table table-hover">
        <thead className="text-center">
          {/* <tr className="text-capitalize">
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">SR.</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">NAME</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">DATE & TIME</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">URL</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">COPY</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">STATUS</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">CHANGE</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">EDIT</span></th>
            <th scope="col" className="p-0 pt-2 pb-2"><span className="badge badge-dark">DELETE</span></th>
          </tr> */}
          <tr>
            <th scope="col">SR.</th>
            <th scope="col">NAME</th>
            <th scope="col">DATE & TIME</th>
            <th scope="col">URL</th>
            <th scope="col">COPY</th>
            <th scope="col">STATUS</th>
            <th scope="col">CHANGE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.totalTest.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className="badge badge-dark">{index + 1}</span>
                </td>
                <td>
                  <span className="badge badge-info text-capitalize">{item.name}</span>
                </td>
                <td>
                  <span className="badge badge-warning">{item.time}</span>
                </td>
                {item.publish ? (
                  <td>
                    <a href={item.url} className="badge badge-primary">
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
                  >
                    copy
                  </button>
                </td>
                {item.publish ? (
                  <td>
                    <span className="badge badge-success text-capitalize">published</span>
                  </td>
                ) : (
                  <td>
                    <span className="badge badge-danger text-capitalize">unpublished</span>
                  </td>
                )}
                {item.publish ? (
                  <td>
                    <button className="btn btn-sm btn-outline-danger text-capitalize">
                      unpublish
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="btn btn-sm btn-outline-success text-capitalize">
                      publish
                    </button>
                  </td>
                )}
                <td>
                  <button
                    className="btn btn-sm btn-outline-info mr-2"
                    disabled={item.publish ? true : false}
                    onClick={()=>{props.editTest(item.name,item._id)}}
                  >
                    <i className="far fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger mr-2"
                    disabled={item.publish ? true : false}
                    onClick={()=>{props.deleteTest(item.name,item._id)}}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default HistoryTable;
