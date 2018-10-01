import React, { Fragment } from 'react';
import IconPlay from '@material-ui/icons/PlayCircleOutline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import format from 'format-duration';

const styles = (theme) => ({
  playbackBar: {
    ...theme.inject.flex({ justify: 'space-around' }),
    backgroundColor: '#000',
    padding: '0px 20px',
    color: '#fff',
    marginBottom: '15px'
  },
  progressBar: {
    flex: '0.9'
  },
  typography: {
    ...theme.inject.flex({ alignItems: 'center' })
  }
});

const RealPlayback = (props) => {
  const { duration, value, classes, onStart, onStop, onRewind } = props;
  return (
    <div className={classes.playbackBar}>
      <Button type="button" onClick={onStart} children={<IconPlay />} />
      <Typography
        className={classes.typography}
        children={format(Number(value) || 0)}
      />
      <input
        className={classes.progressBar}
        value={value || 0}
        type="range"
        step="50"
        min="0"
        max={duration}
        onChange={(e) => onRewind(e.target.value)}
      />
      <Typography
        className={classes.typography}
        children={format(Number(duration) || 0)}
      />
    </div>
  );
};

export default withStyles(styles)(RealPlayback);
