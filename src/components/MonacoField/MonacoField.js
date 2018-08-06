import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const MonacoField = ({language, theme, code, options, ...rest}) => {
  const defaultOptions = {
    selectOnLineNumbers: true,
  };
  const defaultCode = '// type your code...';
  return (
    <MonacoEditor
      width="100%"
      language={language || 'javascript'}
      theme="vs-dark"
      value={code || defaultCode}
      options={options || defaultOptions}
      {...rest}
    />
  );
};

export default MonacoField;
