import * as actionTypes from '../actions/types';

const initState = {
  events: [],
  startingTime: null,
}

const initEventState = {
  data: null,
  descr: '',
  highlighted: false,
  ts: null,
  type: '',
};

const addEvent = (state, event) => ({
  ...state,
  events: [
    ...state.events,
    {
      ...initEventState,
      ...event,
    },
  ]
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EDITOR_CHANGE_EVENT:
    case actionTypes.TIMELINE_EVENT: {
      const { event } = action.payload;

      return addEvent(state, event);
    }
    case actionTypes.TIMELINE_STARTING_TIME_RESET: {
      const { startingTime } = action.payload;

      return {
        ...state,
        startingTime,
      };
    }
    default:
      return state;
  }
}

// Getters

export const getStartingTime = state => state.startingTime;
