import React, { Component } from 'react';
import ScoresView from './ScoresView';
import { api } from '../../server/mockServer';

class Scores extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      data: {},
    };
  }

  componentDidMount() {
    api.get('/challenges/id/scores').then((response) => {
      if (response.status === 200) {
       
      // setTimeout just to watch the animation...
      // must be removed when connected to real server
      setTimeout(() => (this.setState({ data: response.data.data, loading: false })), 1000) ;
      }
    });
  }

  render() {
    return (
      <ScoresView 
        {...this.state}
      />
    );
  }
}

export default Scores;
