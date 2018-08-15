import * as actionTypes from '../actions/types';

const initState ={
  changes: [],
  code: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EDITOR_CHANGE_ADD: {
      const { change, code } = action.payload;
      return {
        ...state,
        changes: [
          ...state.changes,
          change,
        ],
        code,
      };
    }
    case actionTypes.EDITOR_VALUE_SET: {
      const { code } = action.payload;

      return {
        ...state,
        code,
      };
    }
    default:
      return state;
  }
}

// Getters

export const getChanges = state => state.changes;

export const getCode = state => state.code;
