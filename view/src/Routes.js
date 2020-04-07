import React from "react";
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Logout from './Components/Logout';
import TestHome from './Components/main/Home';
import apps from './appsBasic';
import PropTypes from "prop-types";
import Sidebar from "./Components/Sidebar";
import Test from "./Components/Test";
import Navbar from "./Components/Navbar";
import app from "./appsBasic";
import TestHistory from "./Components/main/TestHistory";
import Profile from "./Components/main/Profile";
import Results from "./Components/main/Result";

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/" component={Home} />
      <RequiresAuthentication path="/dashboard" component={Dashboard} />
      <RequiresAuthentication path="/home" component={TestHome} />
      <RequiresAuthentication path="/add-test" component={Test}/>
      <RequiresAuthentication path="/test-history" component={TestHistory}/>
      <RequiresAuthentication path="/profile" component={Profile}/>
      <RequiresAuthentication path="/results" component={Results}/>
    </Switch>
  </BrowserRouter>
);

const RequiresAuthentication = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      apps.getToken() ? (
     <div className="container-fluid">
        <div className="row">
            <Sidebar {...props}/> 
            <div className="col md-10" style={{ padding: "0px" }}>
                <Navbar name={app.getName()} token={apps.getToken()} />
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
