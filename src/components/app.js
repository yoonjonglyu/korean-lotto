import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { imported } from 'react-imported-component/macro';

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

import models from '../models/models';
import { connect } from 'react-redux';

const App = () => {
  return (
    <Router basename="/korean-lotto">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lotto" component={lotto} />
          <Route exact path="/number" component={randomNumber} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    nowRound : state.nowRound.nowRound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getNowRound : models.getRound(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);