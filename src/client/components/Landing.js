import React, { Component } from 'react';
import Welcome from './Welcome';
import Homepage from './Homepage';
import JRewind from '../JRewind';

class Landing extends Component {
  state = {
    isReady: false
  };

  toggleView = () => {
    JRewind.startRecording();
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
