import * as actionTypes from '../actions/types';

const initState = {
  currentTimestamp: null,
  duration: null,
  events: [],
  isPlaying: false,
  playedEvents: [],
  startingTime: null,
}

const initEventState = {
  descr: '',
  highlighted: false,
  payload: null,
  ts: null,
  type: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PLAYBACK_STARTING_TIME_RESET: {
      const { startingTime } = action.payload;

      return {
        ...state,
        startingTime,
      };
    }
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

export const getStartingTime = state => state.startingTime;
