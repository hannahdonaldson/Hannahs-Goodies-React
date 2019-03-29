import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SearchBar from './pages/search-bar'

export default class NavigationContainer extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<div className="links">
					<div className="nav-link"><NavLink exact to="/home" activeClassName="nav-link-active">Home</NavLink></div>
					<div className="nav-link"><NavLink exact to="/form" activeClassName="nav-link-active">Subscribe</NavLink></div>
					<div className="nav-link"><NavLink exact to="/about-us" activeClassName="nav-link-active">About Us</NavLink></div>
					<div className="nav-link"><NavLink exact to="/search-bar" activeClassName="nav-link-active">Search Bar</NavLink></div>
				</div>
				<SearchBar />
				<hr />
			</div>
		);
	}
}