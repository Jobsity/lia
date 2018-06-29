import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Monaco from '../pages/HomepageMonaco';
import CodeMirror from '../pages/HomepageCodeMirror';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Monaco} />
		<Route exact path="/codemirror" component={CodeMirror} />
  </Switch>
);

export default Router;
