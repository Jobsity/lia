import React, { Component } from 'react';
import Welcome from './Welcome';
import Homepage from './Homepage';

class Landing extends Component {
  state = {
    isReady: true
  };

  toggleView = () => {
    this.setState({
      isReady: true
    });
  };

  render() {
    return this.state.isReady ? (
      <Homepage {...this.props} />
    ) : (
      <Welcome {...this.props} toggleView={this.toggleView} />
    );
  }
}

export default Landing;
