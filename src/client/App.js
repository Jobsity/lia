import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import theme from './styles/theme';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/:token" exact component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
