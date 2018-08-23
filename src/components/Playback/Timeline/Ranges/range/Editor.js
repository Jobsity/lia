import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    bottom: 0,
    color: '#00FF00',
    position: 'absolute',
    transform: 'translate(-50%, 0)',
  },
};

const Output = (props) => {
  const { classes } = props;

  return (
    <FontAwesomeIcon
      className={classes.container} icon={faCheck}
    />
  )
}

export default withStyles(styles)(Output);
