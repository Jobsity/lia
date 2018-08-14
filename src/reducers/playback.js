import * as actionTypes from '../actions/types';

const initState = {
  currentTimestamp: null,
  duration: null,
  isPlaying: false,
  playedEvents: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PLAYBACK_PLAYING_SET: {
      const { isPlaying } = action.payload;

      return {
        ...state,
        isPlaying,
      };
    }
    default:
      return state;
  }
}


// Getters

export const getIsPlaying = state => state.isPlaying;
