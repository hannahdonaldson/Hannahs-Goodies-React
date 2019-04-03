import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../static/assets/images/hannahs-goodies-logo.png'

import SearchBar from './search/search-bar'

export default class NavigationContainer extends Component {
	render() {
		return (
			<div className = "navigation-wrapper">
				<div className="nav-wrapper">
					<div className="links">
						<div className="nav-link"><NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink></div>
						<div className="nav-link"><NavLink exact to="/form" activeClassName="nav-link-active">Subscribe</NavLink></div>
						<div className="nav-link"><NavLink exact to="/about-us" activeClassName="nav-link-active">About Us</NavLink></div>
						<div className="nav-link"><NavLink exact to="/auth" activeClassName="nav-link-active">Login</NavLink></div>
					</div>
					<div className = "search-bar-nav"> <SearchBar /> </div>
					<div className = 'cart-logo'> <i className="fas fa-shopping-cart"></i> </div>
					<hr />
					<div className = "logo"> <img src={Logo} /> </div>
				</div>
			</div>
		);
	}
}