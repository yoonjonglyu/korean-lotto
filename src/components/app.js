import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { imported, lazy, useImported } from 'react-imported-component/macro';
import '../css/main.css';

import Home from './Home';
import loading from './loading';
const lotto = imported(
  () => import('./lotto'), {loadingComponent : loading}
);
const randomNumber = imported(
  () => import('./number'), {loadingComponent : loading}
);
const NotFound = imported(
  () => import('./notfound'), {loadingComponent : loading}
);

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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