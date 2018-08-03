import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const MonacoField = (props) => {
  const options = {
    selectOnLineNumbers: true,
  };
  const code = '// type your code...';
  return (
    <MonacoEditor
      width='100%'
      language={props.language ? props.language : "javascript"}
      theme='vs-dark'
      value={props.code ? props.code : code}
      options={props.options ? props.options : options}
      {...props}
    />
  )
}

export default MonacoField;