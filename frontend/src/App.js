import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/pages/Auth';
import Events from './components/pages/Events';
import Bookings from './components/pages/Bookings';

import Nav from './components/toolbar/Nav'





class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Nav />
          <main className="main_content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={Auth}/>
              <Route path="/events" component={Events}/>
              <Route path="/bookings" component={Bookings}/>
            </Switch>
          </main>
      </React.Fragment>
      </BrowserRouter>
     
    );
  }
}

export default App;
