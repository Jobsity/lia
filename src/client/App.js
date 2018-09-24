import React, { Component } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Router from './router/router';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Welcome';
import theme from './styles/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Router />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
