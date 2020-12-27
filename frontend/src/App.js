import React, { Component } from "react";
import Home from "./Home";
import Display from "./Display"
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/availableDoctors" component={Display}/>
      </Switch>
    </Router>;
  }
}
