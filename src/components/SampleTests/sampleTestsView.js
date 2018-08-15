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
  handleSelectChange,
  handleResetClick,
  handleRunTestsClick,
  handleSubmitClick,
  handleTestsEditorChange,
}) {
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
          </div>
          <div className="output-console">
          <MonacoField
            code={tests.currentTests}
            language={tests.language}
            onChange={e => handleTestsEditorChange(e)}
            options={{
              lineNumbers: "off",
              readOnly: false,
            }}
            />
          </div>
          <div>
            <Button onClick={handleResetClick}>Reset</Button>
            <Button onClick={handleRunTestsClick}>Run Tests</Button>
            <Button onClick={handleSubmitClick}>Submit</Button>
          </div>
        </div>
      )}
    </div>
  );
}

sampleTestsView.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(sampleTestsView);
