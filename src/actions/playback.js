import * as actionTypes from './types';

export const setIsPlaying = isPlaying => ({
  type: actionTypes.PLAYBACK_PLAYING_SET,
  payload: {
    isPlaying,
  },
});
