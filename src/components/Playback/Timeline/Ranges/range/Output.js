import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBug, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    fontSize: '100%',
  },
};

const Output = (props) => {
  const { classes, dataArray: [data] } = props;
  const { err, tests } = data.internalTests || data.clientTests;
  const testsLen = tests.length;
  const passedLen = tests.filter(t => t.passed).length;
  let color = '#00FF00';
  let icon = faCheck;
  let tooltipTitle = `All tests passed!`;

  if (passedLen < testsLen) {
    color = '#FF0000';
    icon = faExclamationTriangle;
    tooltipTitle = `Only ${passedLen} of ${testsLen} tests passed`;
  } else if (typeof err === 'string' && err.length > 0) {
    color = '#FF4800';
    icon = faBug;
    tooltipTitle = `All tests passed but with errors: ${err}`;
  }

  return (
    <Tooltip title={tooltipTitle}>
      <FontAwesomeIcon
        className={classes.container}
        icon={icon}
        style={{
          color,
        }}
      />
    </Tooltip>
  )
}

export default withStyles(styles)(Output);
