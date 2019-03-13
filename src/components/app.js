import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './nav-bar/navigation-container'
import Clay from './materials/clay'
import Tools from './materials/tools'
import Glase from './materials/glase'
import Plaster from './materials/plaster'

import Welcome from './about-us/welcome'
import Refrences from './about-us/refrences'
import CustomerActivity from './about-us/customer-activity'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route path='/clays' component={Clay}/>
              <Route path='/glase' component={Glase}/>
              <Route path='/tools' component={Tools}/>
              <Route path='/plaster' component={Plaster}/>
              <Route path='/customer-activity' component={CustomerActivity}/>
              <Route path='/refrences' component={Refrences}/>
              <Route path='/welcome' component={Welcome}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}