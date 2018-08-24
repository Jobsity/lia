import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { formatStartEnd } from '../../lib/utils/timer';

const styles = {
  text: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    whiteSpace: 'nowrap',
  },
};

const Timer = (props) => {
  const { classes, currentTime, duration } = props;

  if (!duration) {
    return null;
  }

  return (
    <Typography
      className={classes.text}
      variant="body2"
    >
      {formatStartEnd(currentTime || 0, duration)}
    </Typography>
  );
};

export default withStyles(styles)(Timer);
