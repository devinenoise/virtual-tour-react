import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='http://devinenoise.github.io/virtual-tour-react/'
          component={Home}
          exact
        />
        <Route
          path='http://devinenoise.github.io/virtual-tour-react/signin'
          component={SignIn}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
