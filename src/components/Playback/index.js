import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import * as fromReducers from '../../reducers';
import * as playbackActions from '../../actions/playback';

import PlayPauseButton from './PlayPauseButton';
import Slider from './Slider';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
  }
};

class Playback extends Component {
  eventsTimeoutId = null;

  state = {
    timestamp: 0,
  }

  handleSliderChange = event => {
    const { value } = event.target;

    this.playEvents(value);
  }

  togglePlayPause = () => {
    const { isPlaying, setIsPlaying } = this.props;

    setIsPlaying(!isPlaying);
  }

  componentDidUpdate(prevProps) {
    const { events, isPlaying } = this.props;

    if (prevProps.isPlaying && !isPlaying) {
      clearTimeout(this.eventsTimeoutId);
    }

    if (events.length > 0 && !prevProps.isPlaying && isPlaying) {
      this.playEvents(this.state.timestamp);
    }
  }

  playEvents(currentTs) {
    const { events, setIsPlaying, setPlayedEvents } = this.props;
    const index = events.map(e => e.ts <= currentTs).indexOf(false);

    if (index === -1) {
      clearTimeout(this.eventsTimeoutId);
      this.setState({ timestamp: 0 });
      setPlayedEvents(events);
      setIsPlaying(false);
      return;
    }

    const playedEvents = events.slice(0, index);

    if (!this.props.isPlaying) {
      this.setState({ timestamp: currentTs });
      setPlayedEvents(playedEvents);
      return;
    }

    const [nextEvent] = events.slice(index, index + 1);
    const nextTs = Math.min(nextEvent.ts, currentTs + this.props.step);
    const timeout = nextTs - currentTs;

    this.eventsTimeoutId = setTimeout(() => this.playEvents(nextTs), timeout);
    this.setState({ timestamp: currentTs });
    setPlayedEvents(playedEvents);
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <PlayPauseButton
          isPlaying={this.props.isPlaying}
          onClick={this.togglePlayPause}
        />
        <Slider
          onChange={this.handleSliderChange}
          max={this.props.duration}
          value={this.state.timestamp}
        />
      </Paper>
    );
  }
}

const mapState = state => {
  const events = fromReducers.getTimelineEvents(state);
  const { length } = events;
  const duration = length === 0 ? 0 : events[length - 1].ts;

  return {
    duration,
    events,
    isPlaying: fromReducers.getIsPlaying(state),
    step: Math.min(200, duration),
  }
};
const mapDispatch = ({
  setPlayedEvents: playbackActions.setPlayedEvents,
  setIsPlaying: playbackActions.setIsPlaying,
});

export default connect(mapState, mapDispatch)(
  withStyles(styles)(Playback)
);
