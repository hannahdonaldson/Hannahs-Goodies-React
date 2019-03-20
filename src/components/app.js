import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './nav-bar/navigation-container'
import Form from './form/form'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route path='/form' component={Form}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}