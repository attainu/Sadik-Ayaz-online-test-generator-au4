import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './Components/pages/Login/Login';
import SignUp from './Components/pages/Signup/Signup';
import Home from './Components/pages/Homepage/Home';
import Dashboard from './Components/pages/Dashboard/dashboardhome/Dashboard';
import Logout from './Components/pages/Logout/Logout';
import apps from './appsBasic';
import PropTypes from "prop-types";
import Sidebar from "./Components/basic/Sidebar";
import Test from "./Components/pages/Dashboard/createtest/Test";
import Navbar from "./Components/basic/Navbar";
import app from "./appsBasic";
import TestHistory from "./Components/pages/Dashboard/testhistory/TestHistory";
import Profile from "./Components/pages/Dashboard/userprofile/Profile";
import Results from "./Components/pages/Dashboard/testresults/Result";
import About from './Components/pages/About/About';

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <RequiresAuthentication path="/dashboard" component={Dashboard} />
      <RequiresAuthentication path="/add-test" component={Test} />
      <RequiresAuthentication path="/test-history" component={TestHistory} />
      <RequiresAuthentication path="/profile" component={Profile} />
      <RequiresAuthentication path="/results" component={Results} />
    </Switch>
  </BrowserRouter>
);

const RequiresAuthentication = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      apps.getToken() ? (
        <div className="container-fluid">
          <Navbar name={app.getName()} token={apps.getToken()} />
            <div className="row">
              <div className="col-md-2">
                <Sidebar {...props} />
              </div>
              <div className="col-md-10">
                <Component {...props} />
              </div>
            </div>
          </div>
        
      ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);
RequiresAuthentication.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any
};

export default Content;
