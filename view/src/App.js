import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                exact path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
