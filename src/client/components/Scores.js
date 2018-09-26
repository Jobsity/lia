import React, { Component } from 'react';
import ScoresView from './ScoresView';
import { api } from '../../server/mockServer';

class Scores extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      data: {}
    };
  }

  componentDidMount() {
    api.get('/challenges/id/scores').then((response) => {
      this.setState({ data: response.data.data, loading: false })
    });
  }

  render() {
    return <ScoresView {...this.state} />;
  }
}

export default Scores;
