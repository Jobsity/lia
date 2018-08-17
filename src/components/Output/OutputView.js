import React from 'react';
import { PropTypes } from 'prop-types';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandibleListItem from './ExpandibleListItem'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDoubleDown, faAngleDoubleUp, faAngry, faBug } from "@fortawesome/free-solid-svg-icons";

function OutputView({
  loading,
  testsResults,
  handleClickCategoryItem,
  passedItemsOpen,
  failedItemsOpen,
  errorItemsOpen,
  classes
  }) {
  let testsResultsData = {
    tests: [
      {
        id: 0,
        passed: true,
        expectedResult: 'Hello World',
        testResult: 'Hello World',
      },
      {
        id: 1,
        passed: false,
        expectedResult: 'Hi I am from Jobsity',
        testResult: 'Hi I am from Jobsity',
      },
      {
        id: 2,
        passed: true,
        expectedResult: 'Hello World',
        testResult: 'Hello World',
      },
    ],
    executionTime: 230, // time in milliseconds
    err: 'Mocked Error from db output',
  }
  testsResultsData = testsResults;
  const passedTests = testsResultsData ? testsResultsData.tests.filter(test => test.passed) : null;
  const failedTests = testsResultsData ? testsResultsData.tests.filter(test => !test.passed) : null;
  return (
    <Paper elevation={1} square>
      { (!testsResultsData)
        ? (
          <span>
            Not data yet
          </span>
        )
        : (
          <div>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  {`Output from tests. Execution time: ${testsResultsData.executionTime}ms`}
                </ListSubheader>
              }
            >
              <ExpandibleListItem
                render={passedTests.length > 0}
                mainText={`Passed (${passedTests.length})`}
                icon={faCheck}
                trigger={passedItemsOpen}
                toggleFunction={() => handleClickCategoryItem('passed')}
                contentComponent={
                  <List component="div" disablePadding>
                    {passedTests.map( test => (
                      <ListItem key={test.id}>
                        <ListItemText primary={`Test ${test.id} Passed.`} />
                      </ListItem>
                    ))}
                  </List>
                }
              />
              <ExpandibleListItem
                render={failedTests.length > 0}
                mainText={`Passed (${failedTests.length})`}
                icon={faAngry}
                trigger={failedItemsOpen}
                toggleFunction={() => handleClickCategoryItem('failed')}
                contentComponent={
                  <List component="div" disablePadding>
                    {failedTests.map( test => (
                      <ListItem key={test.id}>
                        <ListItemText primary={`Test ${test.id} failed.`} />
                        <ListItemText secondary={`Expected Result: ${test.expectedResult}`} />
                      </ListItem>
                    ))}
                  </List>
                }
              />
              <ExpandibleListItem
                render={testsResultsData.err}
                mainText="Errors"
                icon={faBug}
                trigger={errorItemsOpen}
                toggleFunction={() => handleClickCategoryItem('error')}
                contentComponent={
                  <List component="div" disablePadding>
                    <List component="div">
                      <ListItem>
                        <ListItemText primary="STDERR" />
                        <ListItemText secondary={testsResultsData.err} />
                      </ListItem>
                    </List>
                  </List>
                }
              />
            </List>
          </div>
        )
      }
    </Paper>
  );
}


OutputView.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleClickCategoryItem: PropTypes.func.isRequired,
  passedItemsOpen: PropTypes.bool.isRequired,
  failedItemsOpen: PropTypes.bool.isRequired,
  errorItemsOpen: PropTypes.bool.isRequired,
};

export default OutputView;
