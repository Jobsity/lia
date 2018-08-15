import React from "react";
import { PropTypes } from "prop-types";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import MonacoField from "../MonacoField/MonacoField";
import styles from "./styles";

function sampleTestsView({
  classes,
  data,
  loading,
  selectedLang,
  handleSelectChange,
  handleButtonClick
}) {
  const sampleTests = loading
    ? null
    : data.testSuite.filter(tests => tests.language === selectedLang)[0];
  return (
    <div>
      {loading ? (
        <CircularProgress
          classes={{ root: classes.loading }}
          size={200}
          color="secondary"
        />
      ) : (
        <div>
          <div>
            {
              <FormControl>
              <InputLabel>Language</InputLabel>
                <Select
                  native
                  value={selectedLang}
                  input={<Input id="a" />}
                  onChange={handleSelectChange}>
                  {data.languages.map(language => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </Select>
              </FormControl>
            }
            <Button onClick={handleButtonClick}>Run Tests</Button>
          </div>
          <div className="output-console">
            <MonacoField
              code={sampleTests ? sampleTests.tests : ""}
              options={{
                readOnly: true,
                lineNumbers: "off",
                minimap: {
                  enabled: false
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

sampleTestsView.propTypes = {
  data: PropTypes.shape({
    instructions: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  selectedLang: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired
};

export default withStyles(styles)(sampleTestsView);
