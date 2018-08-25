import * as actionTypes from '../actions/types';

const initState = {
  changes: [],
  code: null,
  resetCounter: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EDITOR_CHANGE_EVENT:
    case actionTypes.EDITOR_VALUE_SET: {
      const { code } = action.payload;

      return {
        ...state,
        code,
      };
    }
    case actionTypes.PLAYBACK_EVENTS_SET:
      return {
        ...state,
        changes: action.payload.eventsData.editor || [],
      }
    case actionTypes.RESET_EDITORS:
    return {
      ...state,
      resetCounter: state.resetCounter + 1,
    }
    default:
      return state;
  }
}

// Getters

export const getChanges = state => state.changes;

export const getCode = state => state.code;

export const getResetCounter = state => state.resetCounter;
