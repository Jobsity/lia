import React, { Component } from 'react';
import CodeMirror from './CodeMirror';
import JRewind from '../JRewind';

class Editor extends Component {
  render() {
    return (
      <CodeMirror
        onChange={(editor, data, value) =>
          console.log(value) || JRewind.feeder(value)
        }
        styles={{
          overflow: 'hidden'
        }}
      />
    );
  }
}

export default Editor;
