import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Editor from './CodeMirror';
import dialogs from './../data/dialogs';
import Dialog from './Dialog';
import SessionControls from './SessionControls';
import { supportedLanguages, sessionActions } from './../data/sessionControls';
import JRewind from '../JRewind';

const styles = (theme) => ({
  loading: {
    position: 'absolute',
    top: '8em',
    left: '8em'
  }
});

function sampleTestsView({
  classes,
  tests,
  dialogOpened,
  status,
  dialogHandlers,
  handleRunTestsClick,
  handleTestsEditorChange,
  handleDialogOpening,
  challengeSubmitted
}) {
  return (
    <Fragment>
      <Editor />
      <SessionControls
        buttons={sessionActions.map((action) => ({
          text: action,
          handler: () =>
            JRewind.stopRecording() || console.log(JRewind.getDisk())
        }))}
        listItems={supportedLanguages}
        listLabel="Select a language"
      />
      {dialogOpened && (
        <Dialog
          title={dialogs[dialogOpened].title}
          content={dialogs[dialogOpened].content}
          onCancel={() => handleDialogOpening(dialogOpened)}
          actions={[
            {
              text: dialogs[dialogOpened].confirmationText,
              handler: dialogHandlers[dialogOpened]
            }
          ]}
        />
      )}
    </Fragment>
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
  dialogOpened: PropTypes.string,
  dialogHandlers: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles, { withTheme: true })(sampleTestsView);
