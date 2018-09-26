import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './../components/Landing';
import NotFound from './../components/NotFound';

const Router = () => (
  <Switch>
    <Route path="/:token" exact component={Landing} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
