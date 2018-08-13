import * as actionTypes from './types';

export const resetStartingTime = () => ({
  type: actionTypes.PLAYBACK_STARTING_TIME_RESET,
  payload: {
    startingTime: new Date().getTime(),
  },
});

export const setIsPlaying = isPlaying => ({
  type: actionTypes.PLAYBACK_PLAYING_SET,
  payload: {
    isPlaying,
  },
});
