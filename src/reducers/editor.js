import * as actionTypes from '../actions/types';

const initState ={
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
    default:
      return state;
  }
}

// Getters

export const getCode = state => state.code;
