import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    const {
      homeHandler,
      createTestHandler,
      testHistoryHandler,
      profileHandler,
      resultsHandler,
    } = this.props;
    return (
      <div className="col-md-2 sidebar-wrapper bg-light">
        <div className="navbar-nav mx-auto my-auto">
          <Link className="navbar-brand text-dark" to="/dashboard">
            <b> Test-Mania </b>
          </Link>
        </div>
        <hr></hr>
        <div>
          <p className="nav-link dash-navbar" onClick={homeHandler}>
            Home
          </p>
          <p className="nav-link dash-navbar" onClick={createTestHandler}>
            Create Test
          </p>
          <p className="nav-link dash-navbar" onClick={testHistoryHandler}>
            Test History
          </p>
          <p className="nav-link dash-navbar" onClick={profileHandler}>
            Profile
          </p>
          <p className="nav-link dash-navbar" onClick={resultsHandler}>
            Results
          </p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
