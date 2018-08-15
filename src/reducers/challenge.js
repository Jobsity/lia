import {
  FETCH_CHALLENGE_DATA_START,
  FETCH_CHALLENGE_DATA_SUCCESS,
  FETCH_CHALLENGE_DATA_ERROR,
} from '../actions/types'; 

const initialState = {
  difficulty: '',
  error: '',
  isLoading: true,
  languages: [],
  score: null,
  stats: null,
  testSuite: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHALLENGE_DATA_START:
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case FETCH_CHALLENGE_DATA_SUCCESS:
      return {
        ...state,
        languages: action.payload.data.languages,
        testSuite: action.payload.data.testSuite,
        difficulty: action.payload.data.difficulty,
        error: '',
        isLoading: false,
      }
    case FETCH_CHALLENGE_DATA_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      break;
  }
  return state;
}

// Getters
export const getDifficulty = state => state.difficulty;

export const getError = state => state.error;

export const getIsLoading = state => state.isLoading;

export const getLanguages = state => state.languages;

export const getScore = state => state.score;

export const getStats = state => state.stats;

export const getTestSuite = state => state.testSuite;