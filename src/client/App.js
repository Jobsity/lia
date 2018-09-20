import React, { Component } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Router from './router/router';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import theme from './styles/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path='/:roomId'
            component={<div>404</div>} />
          <Route 
            // component={NotFound}
            render={() => <div>404</div>} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
