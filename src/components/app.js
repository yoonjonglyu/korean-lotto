import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import lotto from './lotto';
import NotFound from './notfound';

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