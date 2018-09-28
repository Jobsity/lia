import React, { Fragment } from 'react';
import IconPlay from '@material-ui/icons/PlayCircleOutline';
import { withStyles } from '@material-ui/core/styles';
import format from 'format-duration';

const styles = (theme) => ({
  playbackBar: {
    ...theme.inject.flex({ justify: 'space-around' }),
    backgroundColor: '#000',
    padding: '0px 20px',
    color: '#fff'
  },
  progressBar: {
    flex: '0.9'
  }
});

const RealPlayback = (props) => {
  const { duration, value, classes, onStart, onStop, onRewind } = props;
  return (
    <div className={classes.playbackBar}>
      <button type="button" onClick={onStart} children={<IconPlay />} />
      <p children={format(Number(value) || 0)} />
      <input
        className={classes.progressBar}
        value={value || 0}
        type="range"
        step="50"
        min="0"
        max={duration}
        onChange={(e) => onRewind(e.target.value)}
      />
      <p children={format(Number(duration) || 0)} />
      {/* <button
        type='button'
        onClick={onStop}
        children='stop' /> */}
    </div>
  );
};

export default withStyles(styles)(RealPlayback);
