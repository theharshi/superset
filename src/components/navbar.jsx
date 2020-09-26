import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            Superset
          </Link>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/companies" class="nav-link">
                Copanies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/myprofile" class="nav-link">
                My profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
