import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute'

import Signup from './pages/Signup';
import Signin from './pages/Signin'
import LandingPage from './pages/LandingPage'
import Manager from './pages/Manager'
import Employee from './pages/Employee';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/manager" component={Manager} />
          <PrivateRoute path="/employee" component={Employee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
