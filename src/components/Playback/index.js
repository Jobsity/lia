import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as fromReducers from '../../reducers';
import * as playbackActions from '../../actions/playback';

class Playback extends Component {
  timeoutId = null;

  togglePlayPause = () => {
    const { isPlaying, setIsPlaying } = this.props;

    setIsPlaying(!isPlaying);
  }

  componentDidUpdate(prevProps) {
    const { events, isPlaying } = this.props;

    if (prevProps.isPlaying && !isPlaying) {
      clearTimeout(this.timeoutId);
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
      clearTimeout(this.timeoutId);
      setPlayedEvents(events);
      setIsPlaying(false);
      return;
    }

    const playedEvents = events.slice(0, index);
    const [nextEvent] = events.slice(index, index + 1);
    const nextTs = nextEvent.ts;
    const timeout = nextTs - currentTs;

    this.timeoutId = setTimeout(() => this.playEvents(nextTs), timeout);

    setPlayedEvents(playedEvents);
  }

  render() {
    const { isPlaying } = this.props;

    return (
      <button onClick={this.togglePlayPause}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
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

export default connect(mapState, mapDispatch)(Playback);
