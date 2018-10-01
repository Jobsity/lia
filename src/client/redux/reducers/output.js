import {
  PLAYBACK_EVENTS_SET,
  RUN_SAMPLE_TESTS_SUCCESS,
  RUN_SAMPLE_TESTS_ERROR,
  SUBMIT_CHALLENGE_SUCCESS,
  SUBMIT_CHALLENGE_ERROR
} from '../actions/types';

const initialState = {
  testsResults: {
    clientTests: null,
    internalTests: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLAYBACK_EVENTS_SET: {
      const { output } = action.payload.eventsData;

      if (!output || output.length === 0) {
        return {
          ...state,
          testsResults: null
        };
      }

      return {
        ...state,
        testsResults: output[output.length - 1]
      };
    }
    case RUN_SAMPLE_TESTS_SUCCESS:
      return {
        ...state,
        testsResults: action.payload.results
      };
    case RUN_SAMPLE_TESTS_ERROR:
      return {
        ...state,
        testsResults: initialState.testsResults
      };
    case SUBMIT_CHALLENGE_SUCCESS:
      return {
        ...state,
        testsResults: action.payload.results
      };
    case SUBMIT_CHALLENGE_ERROR:
      return {
        ...state,
        testsResults: initialState.testsResults
      };
    default:
      break;
  }
  return state;
}

export const getTestsResults = (state) => state.testsResults;
