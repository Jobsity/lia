import React from 'react';
import { PropTypes } from 'prop-types';
import MonacoField from '../MonacoField/MonacoField';

function InstructionsView({ data, loading, onChange, editorDidMount }) {
  return (
    <div>
      { loading
        ? (
          <span>
            Loading...
          </span>
        )
        : (
          <div>
            <span>
              The console output from running the tests can be seen here.
            </span>
            <div className="output-console">
              <MonacoField
                code={data.instructions}
                options={{
                  readOnly: true,
                  lineNumbers: 'off',
                }}
                onChange={onChange}
                editorDidMount={editorDidMount}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}


InstructionsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  editorDidMount: PropTypes.func.isRequired,
};

export default InstructionsView;
