import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Welcome from '../components/Welcome/Welcome';

const Router = () => (
  <Switch>
    <Route exact path="/:roomId/welcome" component={Welcome} />
    <Redirect from="/:roomId" exact to="/:roomId/welcome" />
    <Route exact path="/:roomId/home" component={Homepage} />
    <Route path="/" render={() => <div>Error 404</div>} />
  </Switch>
);

export default Router;
