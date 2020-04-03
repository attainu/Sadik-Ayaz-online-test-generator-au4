import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";
import Logout from './components/logout';
import Home from './components/home';
import Signup from './components/Signup';
class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/logout">
              <Logout></Logout>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
