import React from "react";
import { PropTypes } from "prop-types";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import MonacoField from "../MonacoField/MonacoField";
import styles from "./styles";

function sampleTestsView({
  classes,
  tests,
  selectedLang,
  handleSelectChange,
  handleButtonClick,
}) {
  const sampleTests = tests.isLoading
    ? null
    : tests.testSuite.filter(listOfTests => listOfTests.language === tests.language)[0];
  return (
    <div>
      {tests.isLoading ? (
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
                <Select
                  native
                  value={tests.language}
                  input={<Input id="a" />}
                  onChange={handleSelectChange}>
                  {tests.languages.map(language => (
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
  selectedLang: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(sampleTestsView);
