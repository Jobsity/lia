import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  container: {
    'background-size': '1rem 1rem',
    'background-image': 'radial-gradient(#fff 0%, #fff 20%, transparent 20%)',
    height: '100%',
    minWidth: '1rem'
  }
};

const Editor = (props) => {
  const { classes } = props;

  return (
    <Tooltip title="Editor typing">
      <div className={classes.container} />
    </Tooltip>
  );
};

export default withStyles(styles)(Editor);
