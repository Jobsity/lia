import { SET_CURRENT_LANGUAGE, FETCH_SESSION_DATA_SUCCESS } from "../actions/types";

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
    case FETCH_SESSION_DATA_SUCCESS:
      console.log(action);
      return {
        ...state,
        user: action.payload.data.user,
        language: action.payload.data.language,
        isLive: action.payload.data.isLive,
      }
    default:
      break;
  }
  return state;
}

// Getters
export const getLanguage = state => state.language;

export const getUser = state => state.user;
