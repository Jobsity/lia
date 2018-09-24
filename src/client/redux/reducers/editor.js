import * as actionTypes from '../actions/types';

const initState = {
  changes: [],
  code: null,
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
    default:
      return state;
  }
}

// Getters

export const getChanges = state => state.changes;

export const getCode = state => state.code;
