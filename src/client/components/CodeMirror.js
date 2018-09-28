import React from 'react';
import { UnControlled as CodeMirrorEditor } from 'react-codemirror2';
import editorOptions from './../data/editorOptions';
import JRewind from '../JRewind';

const CodeMirror = (props) => {
  return (
    <CodeMirrorEditor
      value="// waiting for your code" // this will likely be replaced by a "value" prop passed to this component elsewhere
      options={editorOptions}
      {...props}
    />
  );
};

// setTimeout(() => {
//   JRewind.startRecording();
// }, 2000)

// setTimeout(() => {
//   JRewind.stopRecording();
//   console.log(JRewind.getDisk())
// }, 10000)

export default CodeMirror;
