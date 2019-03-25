import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<div className="links">
					<div className="nav-link"><NavLink exact to="/form">Subscribe</NavLink></div>
					<div className="nav-link"><NavLink exact to="/home">Home</NavLink></div>
				</div>
				<hr />
			</div>
		);
	}
}