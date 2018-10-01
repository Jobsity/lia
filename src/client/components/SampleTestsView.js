import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CodeMirror from './CodeMirror';
import dialogs from './../data/dialogs';
import Dialog from './Dialog';
import SessionControls from './SessionControls';
import { supportedLanguages, sessionActions } from './../data/sessionControls';

const styles = (theme) => ({
  loading: {
    position: 'absolute',
    top: '8em',
    left: '8em'
  },
  paper: {
    ...theme.inject.flex({ dir: 'column' }),
    flex: '1'
  }
});

const SampleTestsView = (props) => {
  const { dialogOpened, dialogHandlers, handleDialogOpening, classes } = props;
  return (
    <Paper className={classes.paper}>
      <CodeMirror />
      <SessionControls
        buttons={sessionActions}
        listItems={supportedLanguages}
        listLabel="Select a language"
        onButton={(e) => console.log(e.target)}
        onListItem={(e) => console.log(e)}
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
    </Paper>
  )
}

SampleTestsView.propTypes = {
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

export default withStyles(styles)(SampleTestsView);
