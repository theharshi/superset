import React, { Component } from "react";
import Company from "./company";
class Companies extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>
      </div>
    );
  }
}

export default Companies;
