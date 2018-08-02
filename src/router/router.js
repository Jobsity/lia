import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Monaco from '../pages/HomepageMonaco';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Monaco} />
  </Switch>
);

export default Router;
