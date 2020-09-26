import React, { Component } from "react";
import "./card.css";
class Company extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <head>
          {/* <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400"
            rel="stylesheet"
          ></link> */}
        </head>
        {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"> */}
        <body>
          <div className="container">
            <div className="card">
              <h3 className="title">Company Name</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
                <div className="row title" id="mmmmm">
                  <div className="col-4">
                    <h4 class="btn btn-primary">CTC : Rs XXXX - XXXX</h4>
                  </div>
                  <div className="col-4">
                    <h4 class="btn btn-primary">CGPA - X</h4>
                  </div>
                  <div className="col-4">
                    <h4 className="btn btn-primary">Deadline : 12-12-12</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default Company;
