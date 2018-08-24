import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Welcome from '../components/Welcome/Welcome';

import inputs from '../components/Styleguide/inputs';
import selects from '../components/Styleguide/selects';
import tabs from '../components/Styleguide/tabs';
import texts from '../components/Styleguide/texts';

const Router = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/evaluatorToken/welcome" />} />
    <Redirect from="/:token" exact to="/:token/welcome" />
    <Route exact path="/:token/home" component={Homepage} />
    <Route exact path="/:token/welcome" component={Welcome} />
  
    {/* Style guides */}
    <Route exact path="/styles/inputs" component={inputs} />
    <Route exact path="/styles/selects" component={selects} />
    <Route exact path="/styles/tabs" component={tabs} />
    <Route exact path="/styles/texts" component={texts} />

  </Switch>
);

export default Router;
