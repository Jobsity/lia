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
import { faCheck, faAngry, faBug } from "@fortawesome/free-solid-svg-icons";
import ExpandableListItem from './ExpandableListItem';

import styles from './styles';


function OutputView({
  status,
  testsResults,
  handleClickCategoryItem,
  passedItemsOpen,
  failedItemsOpen,
  errorItemsOpen,
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
            trigger={passedItemsOpen}
            toggleFunction={() => handleClickCategoryItem('passed')}
            componentClass={classes.passedList}
            contentComponent={
              <List component="div" disablePadding>
                {passedTests.map( test => (
                  <ListItem key={test.id}>
                    <ListItemText primary={test.name} secondary="Passed"/>
                  </ListItem>
                ))}
              </List>
              
            }
          />
          <ExpandableListItem
            render={failedTests.length > 0}
            mainText={`Failed Tests (${failedTests.length})`}
            icon={faAngry}
            trigger={failedItemsOpen}
            toggleFunction={() => handleClickCategoryItem('failed')}
            componentClass={classes.failedList}
            contentComponent={
              <List component="div" disablePadding>
                {failedTests.map( test => (
                  <ListItem key={test.id}>
                    <ListItemText primary={test.name} secondary={test.message}/>
                  </ListItem>
                ))}
              </List>
            }
          />
          <ExpandableListItem
            render={testsResults.err}
            mainText="Errors"
            icon={faBug}
            trigger={errorItemsOpen}
            toggleFunction={() => handleClickCategoryItem('error')}
            componentClass={classes.error}
            contentComponent={
              <List component="div" disablePadding>
                <List component="div">
                  <ListItem>
                    <ListItemText primary="STDERR" secondary={testsResults.err} />
                  </ListItem>
                </List>
              </List>
            }
          />
        </List>
        {
          (passedTests.length === testsResults.tests.length)
            ? 
              (
                <div className={classes.success}>
                  <p className={classes.successText}>
                    All tests have been completed successfully
                  </p>
                  {(status.submitted)
                    ? (<p className={classes.successText}>Challenge Submitted</p>)
                    : null}
                </div>
              )
            : null
        }
    </Paper>
  );
}

OutputView.propTypes = {
  handleClickCategoryItem: PropTypes.func.isRequired,
  passedItemsOpen: PropTypes.bool.isRequired,
  failedItemsOpen: PropTypes.bool.isRequired,
  errorItemsOpen: PropTypes.bool.isRequired,
  status: PropTypes.instanceOf(Object).isRequired,
  testsResults: PropTypes.instanceOf(Object),
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(OutputView);
