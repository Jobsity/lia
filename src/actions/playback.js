import * as actionTypes from './types';

export const setPlayedEvents = playedEvents => ({
  type: actionTypes.PLAYBACK_EVENTS_SET,
  payload: {
    playedEvents,
  },
});

export const setIsPlaying = isPlaying => ({
  type: actionTypes.PLAYBACK_PLAYING_SET,
  payload: {
    isPlaying,
  },
});
