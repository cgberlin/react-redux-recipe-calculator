import React, { Component, PropTypes } from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';

/* containers */
import App from 'containers/app'
import MainContainer from 'containers/main-container'
import RandomContainer from 'containers/random-recipe-container'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/ingredient-search" component={MainContainer} />
          <Route path="/random-search" component={RandomContainer} />
        </Route>
    </Router>
);
