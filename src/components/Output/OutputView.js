import React from 'react';
import { PropTypes } from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDoubleDown, faAngleDoubleUp, faAngry, faBug } from "@fortawesome/free-solid-svg-icons";

const testsResultsData = {
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

function OutputView({
  loading,
  handleClickCategoryItem,
  passedItemsOpen,
  failedItemsOpen,
  errorItemsOpen,
  }) {
  const passedTests = testsResultsData.tests.filter(test => test.passed);
  const failedTests = testsResultsData.tests.filter(test => !test.passed);
  return (
    <div>
      { loading
        ? (
          <span>
            Loading...
          </span>
        )
        : (
          <div>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  {`Output From tests. Execution time: ${testsResultsData.executionTime}ms`}
                </ListSubheader>
              }
            >
              <ListItem button onClick={() => handleClickCategoryItem('passed')}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCheck} />
                </ListItemIcon>
                <ListItemText inset primary={`Passed (${passedTests.length})`} />
                {passedItemsOpen ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
              </ListItem>
              {(!passedItemsOpen)
                ? null
                : (
                  <List component="div" disablePadding>
                    {passedTests.map( test => (
                      <ListItem key={test.id}>
                        <ListItemText primary={`Test ${test.id} Passed.`} />
                      </ListItem>
                    ))}
                  </List>
                )
              }
              <ListItem button onClick={() => handleClickCategoryItem('failed')}>
                <ListItemIcon>
                <FontAwesomeIcon icon={faAngry} />
                </ListItemIcon>
                <ListItemText inset primary={`Failed (${failedTests.length})`} />
                {failedItemsOpen ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
              </ListItem>
              {(!failedItemsOpen)
                ? null
                : (
                  <List component="div" disablePadding>
                    {failedTests.map( test => (
                      <ListItem key={test.id}>
                        <ListItemText primary={`Test ${test.id} failed.`} />
                        <ListItemText secondary={`Expected Result: ${test.expectedResult}`} />
                      </ListItem>
                    ))}
                  </List>
                )
              }
              {(!testsResultsData.err)
                ? null
                : ( 
                    <React.Fragment>
                      <ListItem button onClick={() => handleClickCategoryItem('error')}>
                        <ListItemIcon>
                        <FontAwesomeIcon icon={faBug} />
                        </ListItemIcon>
                        <ListItemText inset primary="Errors" />
                        {errorItemsOpen ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                      </ListItem>
                      {(!errorItemsOpen)
                        ? null
                        : (
                          <List component="div">
                            <ListItem>
                              <ListItemText primary={testsResultsData.err} />
                            </ListItem>
                          </List>
                        )
                      }
                    </React.Fragment>
                  )
              }
            </List>
          </div>
        )
      }
    </div>
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
