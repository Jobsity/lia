import React, { Component } from 'react';
import OutputView from './OutputView';
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

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
   console.log('onChange', newValue, e);
  }

  render() {
    return (
      <OutputView
        editorDidMount={this.editorDidMount}
        onChange={this.onChange}
        {...this.state}
      />
    );
  }
}

export default Instructions;
