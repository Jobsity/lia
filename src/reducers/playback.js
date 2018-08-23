import * as actionTypes from '../actions/types';

const initState = {
  isPlaying: false,
  playedEvents: null,
  wasInteracted: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PLAYBACK_EVENTS_SET:
      return {
        ...state,
        playedEvents: action.payload.playedEvents,
        wasInteracted: true,
      };
    case actionTypes.PLAYBACK_PLAYING_SET:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
        wasInteracted: true,
      };
    default:
      return state;
  }
}


// Getters

export const getIsPlaying = state => state.isPlaying;

export const getPlayedEvents = state => state.playedEvents;

export const getWasInteracted = state => state.wasInteracted;
