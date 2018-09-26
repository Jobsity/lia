import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import * as fromReducers from './../redux/reducers';
import * as playbackActions from './../redux/actions/playback';

import PlayPauseButton from './PlayPauseButton';
import Timeline from './Timeline';
import Timer from './Timer';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex'
  }
};

class Playback extends Component {
  timeoutId = null;

  state = {
    timestamp: 0
  };

  handleChange = (currentTs) => {
    clearTimeout(this.timeoutId);
    this.timer(currentTs);
  };

  togglePlayPause = () => {
    const { events } = this.props;

    if (events.length === 0) {
      return;
    }

    const { isPlaying, setIsPlaying } = this.props;

    setIsPlaying(!isPlaying);
  };

  componentDidUpdate(prevProps) {
    const { events, isPlaying } = this.props;

    if (prevProps.isPlaying && !isPlaying) {
      clearTimeout(this.timeoutId);
    }

    if (events.length > 0 && !prevProps.isPlaying && isPlaying) {
      this.timer(this.state.timestamp);
    }
  }

  playEvents(newEvents) {
    const { playedEvents, setPlayedEvents } = this.props;

    if (!isEqual(newEvents, playedEvents)) {
      setPlayedEvents(newEvents);
    }
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.setState({ timestamp: this.props.maxTs });
    this.props.setIsPlaying(false);
  }

  timer(currentTs) {
    const { events } = this.props;
    const index = events.map((e) => e.ts <= currentTs).indexOf(false);

    if (index === -1) {
      this.playEvents(events);
      this.stop();
      return;
    }

    if (this.props.isPlaying) {
      const nextEvent = events[index];
      const nextTs = Math.min(nextEvent.ts, currentTs + this.props.step);
      const timeout = nextTs - currentTs;

      this.timeoutId = setTimeout(() => this.timer(nextTs), timeout);
    }

    const playedEvents = events.slice(0, index);

    this.playEvents(playedEvents);
    this.setState({ timestamp: currentTs });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <PlayPauseButton
          isPlaying={this.props.isPlaying}
          onClick={this.togglePlayPause}
        />
        <Timer
          currentTime={this.state.timestamp / 1000}
          duration={this.props.maxTs / 1000}
        />
        <Timeline
          currentTs={this.state.timestamp}
          events={this.props.events}
          maxTs={this.props.maxTs}
          onChange={this.handleChange}
        />
      </Paper>
    );
  }
}

const mapState = (state) => {
  const events = fromReducers.getTimelineEvents(state);
  const { length } = events;
  const maxTs = length === 0 ? 0 : events[length - 1].ts;

  return {
    events,
    isPlaying: fromReducers.getIsPlaying(state),
    maxTs,
    playedEvents: fromReducers.getPlayedEvents(state),
    step: Math.min(100, maxTs)
  };
};
const mapDispatch = {
  setPlayedEvents: playbackActions.setPlayedEvents,
  setIsPlaying: playbackActions.setIsPlaying
};

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(Playback));
