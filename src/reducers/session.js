import { SET_CURRENT_LANGUAGE, FETCH_CHALLENGE_DATA_SUCCESS } from "../actions/types";

const initialState = {
  isLive: true,
  language: '',
  user: {
    id: '',
    name: '',
    role: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      }
    case FETCH_CHALLENGE_DATA_SUCCESS:
      return {
        ...state,
        language: action.payload.data.languages[0],
      }
    default:
      break;
  }
  return state;
}

// Getters
export const getLanguage = state => state.language;

export const getUser = state => state.user;
