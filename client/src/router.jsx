import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';

const Routes = () => (
  <Router>
    <Route path="/restaurants/:id" render={props => <App {...props} />} />
  </Router>
);

export default Routes;
