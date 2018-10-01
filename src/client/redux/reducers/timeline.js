import * as actionTypes from '../actions/types';

const initState = {
  events: [],
  startingTime: null
};

const initEventState = {
  data: null,
  ts: null,
  type: ''
};

const addEvent = (state, event) => ({
  ...state,
  events: [
    ...state.events,
    {
      ...initEventState,
      ...event
    }
  ]
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EDITOR_CHANGE_EVENT:
    case actionTypes.RUN_SAMPLE_TESTS_SUCCESS:
    case actionTypes.SUBMIT_CHALLENGE_SUCCESS:
    case actionTypes.TIMELINE_EVENT: {
      const { event } = action.payload;
      return addEvent(state, event);
    }
    case actionTypes.TIMELINE_RESET:
      return {
        ...initState,
        ...action.payload
      };
    default:
      return state;
  }
};

// Getters

export const getEvents = (state) => state.events;

export const getStartingTime = (state) => state.startingTime;
