import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import loading from './loading';
const lotto = importedComponent(
  () => import('./lotto'), {loadingComponent : loading}
);
const NotFound = importedComponent(
  () => import('./notfound'), {loadingComponent : loading}
);
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lotto" component={lotto} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;