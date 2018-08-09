import React, { Component } from 'react';
import InstructionsView from './InstructionsView';
import { api } from '../../mockServer';

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
        this.setState({ data: response.data.data, loading: false });
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
