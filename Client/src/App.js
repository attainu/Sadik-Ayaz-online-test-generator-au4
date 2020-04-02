import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/home";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Router>

      </div>
    );
  }
}

export default App;
