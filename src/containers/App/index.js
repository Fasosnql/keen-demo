import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'containers/Dashboard';
import Pages from 'containers/Pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Pages} />
    </Switch>
  </Router>
);

export default App;
