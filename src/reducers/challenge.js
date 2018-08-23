import {
  FETCH_CHALLENGE_DATA_START,
  FETCH_CHALLENGE_DATA_SUCCESS,
  FETCH_CHALLENGE_DATA_ERROR,
  SET_CURRENT_LANGUAGE,
  UPDATE_CURRENT_TESTS,
  RESET_EDITORS,
  RUN_SAMPLE_TESTS_START,
  RUN_SAMPLE_TESTS_SUCCESS,
  RUN_SAMPLE_TESTS_ERROR,
  SUBMIT_CHALLENGE_START,
  SUBMIT_CHALLENGE_SUCCESS,
  SUBMIT_CHALLENGE_ERROR,
} from '../actions/types'; 

const initialState = {
  difficulty: '',
  error: '',
  isLoading: true,
  languages: [],
  score: null,
  stats: null,
  testSuite: [],
  currentTests: '',
  runTestsLoading: false,
  runTestsError: '',
  submitChallengeLoading: false,
  submitChallengeError: '',
  submitted: false,
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
        currentTests: action.payload.data.testSuite[0].tests,
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
    case SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentTests: state.testSuite.filter(tests => tests.language === action.payload.language)[0].tests
      }
    case UPDATE_CURRENT_TESTS:
      return {
        ...state,
        currentTests: action.payload.newTests,
      }
    case RESET_EDITORS:
      return {
        ...state,
        currentTests: state.testSuite.filter(tests => tests.language === action.payload.language)[0].tests,
      }
    case RUN_SAMPLE_TESTS_START:
      return {
        ...state,
        runTestsLoading: true,
        runTestsError: '',
        submitChallengeError: '',
      }
    case RUN_SAMPLE_TESTS_SUCCESS:
      return {
        ...state,
        runTestsLoading: false,
        runTestsError: '',
        submitChallengeError: '',
      }
    case RUN_SAMPLE_TESTS_ERROR:
      return {
        ...state,
        runTestsLoading: false,
        runTestsError: action.payload.error,
      }
    case SUBMIT_CHALLENGE_START:
      return {
        ...state,
        submitChallengeLoading: true,
        submitChallengeError: '',
        runTestsError: '',
      }
    case SUBMIT_CHALLENGE_SUCCESS:
      return {
        ...state,
        submitChallengeLoading: false,
        submitChallengeError: '',
        runTestsError: '',
        submitted: true,
      }
    case SUBMIT_CHALLENGE_ERROR:
      return {
        ...state,
        submitChallengeLoading: false,
        submitChallengeError: action.payload.error,
      }
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

export const getCurrentTests = state => state.currentTests;

export const getSubmitted = state => state.submitted;

export const getRunTestsLoading = state => state.runTestsLoading;

export const getRunTestsError = state => state.runTestsError;

export const getSubmitChallengeLoading = state => state.submitChallengeLoading;

export const getSubmitChallengeError = state => state.submitChallengeError;