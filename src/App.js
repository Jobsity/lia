import React, { Component } from 'react';
import Router from './router/router';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
