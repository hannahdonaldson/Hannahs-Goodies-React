import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation-container'
import Home from './pages/home'
import Form from './pages/form'
import AboutUs from './pages/about-us'
import SearchBar from './search/search-bar'
import Auth from './auth/auth'
import ViewGoodie from './admin/viewGoodie'



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route path='/form' component={Form}/>
              <Route exact path='/' component={Home}/>
              <Route path='/about-us' component={AboutUs}/>
              <Route path='/search-bar' component={SearchBar}/>
              <Route path='/auth' component={Auth}/>
              <Route path='/view_goodie/:id' component={ViewGoodie} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}