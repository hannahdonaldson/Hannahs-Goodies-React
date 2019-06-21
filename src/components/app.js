import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation-container'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import SearchBar from './search/search-bar'
import Auth from './auth/auth'
import ViewGoodie from './admin/viewGoodie'
import Cart from './cart/cart'
import CheckoutPage from './pages/checkout';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route path='/checkout' component={CheckoutPage}/>
              <Route exact path='/' component={Home}/>
              <Route path='/about-us' component={AboutUs}/>
              <Route path='/search-bar' component={SearchBar}/>
              <Route path='/auth' component={Auth}/>
              <Route path='/view_goodie/:id' component={ViewGoodie} />
              <Route path='/cart' component={Cart} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}