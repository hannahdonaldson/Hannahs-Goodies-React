import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  render() {
    return (
      <div className="nav-container">
          <div className="links">
              <div className="nav-link"><NavLink exact to="/about-us">About Us</NavLink></div>

              <div className="nav-link"><NavLink exact to="/clays">Clay</NavLink></div>

              <div className="nav-link"><NavLink exact to="/glase">Glase</NavLink></div>

              <div className="nav-link"><NavLink exact to="/plaster">Plaster</NavLink></div>

              <div className="nav-link"><NavLink exact to="/tools">Tools</NavLink></div>

              <div className="nav-link"><NavLink exact to="/welcome">Welcome</NavLink></div>

              <div className="nav-link"><NavLink exact to="/refrences">Our Refrences</NavLink></div>

              <div className="nav-link"><NavLink exact to="/customer-activity">Our Costumer Activity</NavLink></div>
          </div>
          <hr />
      </div>
    );
  }
}