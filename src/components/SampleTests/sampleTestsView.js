import React from 'react';
import { PropTypes } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import MonacoField from '../MonacoField/MonacoField';


function sampleTestsView({ data, loading, selectedLang, handleSelectChange, handleButtonClick}) {
  const sampleTests = loading ? null : data.testSuite.filter( tests => tests.language === selectedLang)[0];
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
            <div>
              {<FormControl>
                <Select
                  native
                  value={selectedLang}
                  input={<Input id="a"/>}
                  onChange={handleSelectChange}
                >
                  {data.languages.map((language) =>
                    <option key={language} value={language}>{language}</option>
                  )}
                </Select>
              </FormControl>}
              <Button onClick={handleButtonClick}>Run Tests</Button>
            </div>
            <div className="output-console">
              <MonacoField
                code={(sampleTests) ? sampleTests.tests : ''}
                options={{
                  readOnly: true,
                  lineNumbers: 'off',
                  minimap: {
                    enabled: false
                  },
                }}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}

sampleTestsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  selectedLang: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default sampleTestsView;