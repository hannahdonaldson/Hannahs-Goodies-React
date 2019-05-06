import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from '../../static/assets/images/hannahs-goodies-logo.png'

// import SearchBar from './search/search-bar'

export default class NavigationContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	cart
	render() {
		return (
			<div className = "navigation-wrapper">
				<div className="nav-wrapper">
					<div className="links">
						<div className="nav-link"><NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink></div>
						<div className="nav-link"><NavLink exact to="/about-us" activeClassName="nav-link-active">About Us</NavLink></div>
						<div className="nav-link"><NavLink exact to="/auth" activeClassName="nav-link-active">Login</NavLink></div>
						<div className = 'cart-logo'> 
						<NavLink exact to = "/cart" className = 'cart-link'>
							<i className="fas fa-shopping-cart" activeclassname="nav-link-active"> </i> 
						</NavLink>
					</div>
					</div>
					{/* <div className = "search-bar-nav"> <SearchBar /> </div> */}
					
					<div className = "logo"> <img src={Logo} /> </div>
				</div>
			</div>
		);
	}
}