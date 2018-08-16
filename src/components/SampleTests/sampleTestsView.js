import React from "react";
import { PropTypes } from "prop-types";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

import MonacoField from "../MonacoField/MonacoField";
import styles from "./styles";

function sampleTestsView({
  classes,
  tests,
  handleSelectChange,
  handleRunTestsClick,
  handleTestsEditorChange,
  resetDialogOpen,
  submitDialogOpen,
  handleDialogOpening,
  handleReset,
  handleSubmit,
  challengeSubmitted
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
          <div className="output-console">
            <MonacoField
              code={tests.currentTests}
              language={tests.language}
              onChange={e => handleTestsEditorChange(e)}
              options={{
                lineNumbers: "off",
                readOnly: false,
                minimap: {
                  enabled: false,
                }
              }}
            />
          </div>
          <div className={classes.selectors}>
            <FormControl>
              <InputLabel>Language</InputLabel>
              <Select
                value={tests.language}
                input={<Input id="a" />}
                onChange={handleSelectChange}>
                {tests.languages.map(language => (
                  <MenuItem key={language} value={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Sets the language for the tests</FormHelperText>
            </FormControl>
          </div>
          <div className={classes.buttons}>
            <Button
              disabled={challengeSubmitted}
              color="secondary"
              onClick={() => handleDialogOpening('reset')}>
              Reset
            </Button>
            <Button
              disabled={challengeSubmitted}
              color="secondary"
              onClick={handleRunTestsClick}>
              Run Tests
            </Button>
            <Button
              disabled={challengeSubmitted}
              onClick={() => handleDialogOpening('submit')}>
              Submit
            </Button>
          </div>
          <Dialog
            open={resetDialogOpen || submitDialogOpen}
            onClose={() =>
              handleDialogOpening(resetDialogOpen ? "reset" : "submit")
            }>
            <DialogTitle>
              {resetDialogOpen ? "Reset tests" : "Submit Challenge"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {resetDialogOpen
                  ? "The changes to the editor and tests will be lost..."
                  : "Are you sure you want to submit the challenge?"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={resetDialogOpen ? handleReset : handleSubmit}
                color="primary">
                {resetDialogOpen ? "Reset" : "Submit"}
              </Button>
              <Button
                onClick={() =>
                  handleDialogOpening(resetDialogOpen ? "reset" : "submit")
                }
                color="primary"
                autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}

sampleTestsView.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  tests: PropTypes.instanceOf(Object).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleRunTestsClick: PropTypes.func.isRequired,
  handleTestsEditorChange: PropTypes.func.isRequired,
  handleDialogOpening: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetDialogOpen: PropTypes.bool.isRequired,
  submitDialogOpen: PropTypes.bool.isRequired,
  challengeSubmitted: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(sampleTestsView);
