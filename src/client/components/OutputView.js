import React from 'react';
import { PropTypes } from 'prop-types';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { faCheck, faBug, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import ExpandableListItem from './ExpandableListItem';

const styles = theme => ({
  container: {
    height: '100%',
    whiteSpace: 'pre-line',
  },
  passedList: {
    color: '#00FF00',
  },
  failedList: {
    color: '#FF0000',
  },
  error: {
    color: '#FF4800',
  },
  noTestsResults: {
    margin: '1rem'
  },
  typography: {
    margin: '1rem',
  },
  progress: {
    margin: '1rem',
  },
  success: {
    margin: '2rem',
    color: '#00FF00',
    textAlign: 'center',
  },
  successText: {
    margin: '1rem',
    color: 'inherit',
  },
  expandedContent: {
    marginLeft: '2rem',
  }
});


function OutputView({
  status,
  testsResults,
  classes,
  }) {
  const passedTests = testsResults ? testsResults.tests.filter(test => test.passed) : null;
  const failedTests = testsResults ? testsResults.tests.filter(test => !test.passed) : null;
  if (status.runTestsLoading || status.submitChallengeLoading) {
    return (
      <Paper elevation={1} square className={classes.container}>
          <div className={classes.noTestsResults}>
            <Typography variant="headline" component="h3" className={classes.typography}>
              Loading...
            </Typography>
            <Typography component="p" className={classes.typography}>
              Evaluating tests
            </Typography>
            <LinearProgress color="secondary" className={classes.progress}/>
          </div>
      </Paper>
    );
  }
  if (status.runTestsError || status.submitChallengeError) {
    return (
      <Paper elevation={1} square className={classes.container}>
          <div className={classes.noTestsResults}>
            <Typography variant="headline" component="h3" className={classes.typography}>
              Error
            </Typography>
            <Typography component="p" className={classes.typography}>
              An error ocurred when making the evaluation of the tests, please try again.
            </Typography>
          </div>
      </Paper>
    );
  }
  if (!testsResults) {
    return (
      <Paper elevation={1} square className={classes.container}>
          <div className={classes.noTestsResults}>
            <Typography variant="headline" component="h3" className={classes.typography}>
              There are no results
            </Typography>
            <Typography component="p" className={classes.typography}>
              Click on Run tests or Submit.
            </Typography>
          </div>
      </Paper>
    );
  }
  return (
    <Paper elevation={1} square className={classes.container}>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div">
              {`Output from tests. Execution time: ${testsResults.executionTime}ms`}
            </ListSubheader>
          }
        >
          <ExpandableListItem
            render={passedTests.length > 0}
            mainText={`Passed Tests (${passedTests.length})`}
            icon={faCheck}
            componentClass={classes.passedList}
          >
            <List component="div">
              {passedTests.map( test => (
                <ListItem key={test.id} className={classes.indented}>
                  <ListItemText primary={test.name} secondary="Passed"/>
                </ListItem>
              ))}
            </List>
          </ExpandableListItem>
          <ExpandableListItem
            render={failedTests.length > 0}
            mainText={`Failed Tests (${failedTests.length})`}
            icon={faExclamationTriangle}
            componentClass={classes.failedList}
          >
            <List component="div">
              {failedTests.map( test => (
                <ExpandableListItem
                  render={!!test}
                  mainText={test.name}
                  componentClass={classes.failedList}
                  key={test.id}
                >
                  <Typography>
                    {test.message}
                  </Typography>
                </ExpandableListItem>
              ))}
            </List>
          </ExpandableListItem>
          <ExpandableListItem
            render={!!testsResults.err}
            mainText="Errors"
            icon={faBug}
            componentClass={classes.error}
          >
            <List component="div">
              <ExpandableListItem
                render
                mainText="STDERR"
                componentClass={classes.error}
              >
                <Typography className={classes.indented}>
                  {testsResults.err}
                </Typography>
              </ExpandableListItem>
            </List>
          </ExpandableListItem>
        </List>
        {
          (passedTests.length === testsResults.tests.length)
            ?(
              <div className={classes.success}>
                <p className={classes.successText}>
                  All tests have been completed successfully
                </p>
                {(status.submitted)
                  ? (<p className={classes.successText}>Challenge Submitted</p>)
                  : null}
              </div>
            ): null
        }
    </Paper>
  );
}

OutputView.propTypes = {
  status: PropTypes.instanceOf(Object).isRequired,
  testsResults: PropTypes.instanceOf(Object),
  classes: PropTypes.instanceOf(Object).isRequired,
};

OutputView.defaultProps = {
  testsResults: null,
};
export default withStyles(styles)(OutputView);
