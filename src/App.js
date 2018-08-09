import React, { Component } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Router from './router/router';

import theme from './styles/theme';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    );
  }
}

export default App;
