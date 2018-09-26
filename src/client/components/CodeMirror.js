import React from 'react';
import { UnControlled as CodeMirrorEditor } from 'react-codemirror2';
import editorOptions from './../data/editorOptions';

const CodeMirror = (props) => {
  return (
    <CodeMirrorEditor value="// your code here..." options={editorOptions} />
  );
};

export default CodeMirror;
