import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Welcome from '../components/Welcome/Welcome';

const Router = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/welcome" />} />
    <Route exact path="/home" component={Homepage} />
    <Route exact path="/welcome" component={Welcome} />
  </Switch>
);

export default Router;
