import React from 'react';
import { PropTypes } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import MonacoField from '../MonacoField/MonacoField';
import dialogs from './dialogs';
import styles from './styles';

function sampleTestsView({
  classes,
  tests,
  dialogOpened,
  status,
  dialogHandlers,
  handleRunTestsClick,
  handleTestsEditorChange,
  handleDialogOpening,
  challengeSubmitted,
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
              <InputLabel color="secondary">Language</InputLabel>
              <Select
                value={tests.language}
                input={<Input />}
                color="secondary"
                onChange={(e) => handleDialogOpening('changeLanguage',e)}
              >
                {tests.languages.map(language => (
                  <MenuItem key={language} value={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.buttons}>
            <Button
              disabled={challengeSubmitted || status.runTestsLoading || status.submitChallengeLoading}
              color="secondary"
              onClick={() => handleDialogOpening('reset')}>
              Reset
            </Button>
            <Button
              disabled={challengeSubmitted || status.runTestsLoading || status.submitChallengeLoading}
              color="secondary"
              onClick={handleRunTestsClick}>
              Run Tests
            </Button>
            <Button
              disabled={challengeSubmitted || status.runTestsLoading || status.submitChallengeLoading}
              onClick={() => handleDialogOpening('submit')}>
              Submit
            </Button>
          </div>
          { 
            (dialogOpened && Object.prototype.hasOwnProperty.call(dialogs, dialogOpened))
            ? 
              (
                <Dialog
                  open
                  onClose={() =>
                    handleDialogOpening(dialogOpened)
                  }>
                  <DialogTitle>
                    {dialogs[dialogOpened].title}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {dialogs[dialogOpened].content}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={dialogHandlers[dialogOpened]}
                      color="secondary">
                      {dialogs[dialogOpened].confirmationText}
                    </Button>
                    <Button
                      onClick={() =>
                        handleDialogOpening(dialogOpened)
                      }
                      color="secondary"
                      autoFocus>
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              )
            : null}
        </div>
      )}
    </div>
  );
}

sampleTestsView.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  tests: PropTypes.instanceOf(Object).isRequired,
  status: PropTypes.instanceOf(Object).isRequired,
  handleRunTestsClick: PropTypes.func.isRequired,
  handleTestsEditorChange: PropTypes.func.isRequired,
  handleDialogOpening: PropTypes.func.isRequired,
  challengeSubmitted: PropTypes.bool.isRequired,
  dialogOpened: PropTypes.string.isRequired,
  dialogHandlers: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default withStyles(styles, { withTheme: true })(sampleTestsView);
