import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  Router,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Companies from "./components/companies";
import Profile from "./components/myprofile";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route path="/companies" component={Companies}></Route>
            <Route path="/myprofile" component={Profile}></Route>
            <Route path="/" component={Companies}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
