import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import loading from './loading';
const lotto = importedComponent(
  () => import('./lotto'), {loadingComponent : loading}
);
const randomNumber = importedComponent(
  () => import('./number'), {loadingComponent : loading}
);
const NotFound = importedComponent(
  () => import('./notfound'), {loadingComponent : loading}
);

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lotto" component={lotto} />
          <Route exact path="/number" component={randomNumber} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
};

export default App;