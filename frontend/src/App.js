import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Auth from './components/pages/Auth';
import Events from './components/pages/Events';
import Bookings from './components/pages/Bookings';
import Nav from './components/toolbar/Nav'
import AuthContext from './components/context/auth-context';

import './App.css';


class App extends Component {

  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null })
  };
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider value={{
          token: this.state.token, 
          userId: this.state.userId, 
          login: this.login, 
          logout: this.logout}}>
          <Nav />
            <main className="main_content">
              <Switch>
                {!this.state.token && <Redirect from="/" to="/auth" exact />}
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && <Route path="/auth" component={Auth}/>}
                <Route path="/bookings" component={Bookings}/>
                {this.state.token &&<Route path="/events" component={Events}/>}
              </Switch>
            </main>
        </AuthContext.Provider>
      </React.Fragment>
      </BrowserRouter>
     
    );
  }
}

export default App;
