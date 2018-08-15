import * as actionTypes from '../actions/types';

const initState = {
  isPlaying: false,
  playedEvents: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PLAYBACK_EVENTS_SET:
      return {
        ...state,
        playedEvents: action.payload.playedEvents,
      };
    case actionTypes.PLAYBACK_PLAYING_SET:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
      };
    default:
      return state;
  }
}


// Getters

export const getIsPlaying = state => state.isPlaying;

export const getPlayedEvents = state => state.playedEvents;
