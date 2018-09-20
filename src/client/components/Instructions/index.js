import React, { Component } from 'react';
import InstructionsView from './InstructionsView';
import { api } from '../../server/mockServer';

class Instructions extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      data: {},
    };
  }

  componentDidMount() {
    api.get('/challenges/id').then((response) => {
      if (response.status === 200) {
       
      // setTimeout just to watch the animation...
      // must be removed when connected to real server
      setInterval(() => (this.setState({ data: response.data.data, loading: false })), 1000) ;
      }
    });
  }

  render() {
    return (
      <InstructionsView
        {...this.state}
      />
    );
  }
}

export default Instructions;
