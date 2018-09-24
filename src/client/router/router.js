import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './../components/Homepage';
import Welcome from './../components/Welcome';

const Router = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/evaluatorToken/welcome" />} />
    <Redirect from="/:token" exact to="/:token/welcome" />
    <Route exact path="/:token/home" component={Homepage} />
    <Route exact path="/:token/welcome" component={Welcome} />
  </Switch>
);

export default Router;
