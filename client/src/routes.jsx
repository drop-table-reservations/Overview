import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import { H1 } from './styles';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/restaurants/:id" render={props => <App {...props} />} />
      <Route path="/" render={() => <H1>Page Not Found</H1>} />
    </Switch>
  </Router>
);

export default Routes;
