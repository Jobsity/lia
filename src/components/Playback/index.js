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

  sliderTimeoutId = null;

  state = {
    timestamp: 0,
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
      // TODO
      // Up until now it is assumed playback starts from stop and not a pause
      this.playEvents(0);
    }
  }

  playEvents(currentTs) {
    const { events, setIsPlaying, setPlayedEvents } = this.props;
    const index = events.map(e => e.ts <= currentTs).indexOf(false);

    if (index === -1) {
      clearTimeout(this.eventsTimeoutId);
      setPlayedEvents(events);
      setIsPlaying(false);
      return;
    }

    const playedEvents = events.slice(0, index);
    const [nextEvent] = events.slice(index, index + 1);
    const nextTs = nextEvent.ts;
    const timeout = nextTs - currentTs;

    this.eventsTimeoutId = setTimeout(() => this.playEvents(nextTs), timeout);

    setPlayedEvents(playedEvents);
  }

  playSlider() {
    // sliderTimeoutId
  }

  render() {
    const { classes, isPlaying, timestamp } = this.props;

    return (
      <Paper className={classes.container}>
        <PlayPauseButton
          isPlaying={isPlaying}
          onClick={this.togglePlayPause}
        />
        <Slider
          value={timestamp}
        />
      </Paper>
    );
  }
}

const mapState = state => ({
  events: fromReducers.getTimelineEvents(state),
  isPlaying: fromReducers.getIsPlaying(state),
});
const mapDispatch = ({
  setPlayedEvents: playbackActions.setPlayedEvents,
  setIsPlaying: playbackActions.setIsPlaying,
});

export default connect(mapState, mapDispatch)(
  withStyles(styles)(Playback)
);
