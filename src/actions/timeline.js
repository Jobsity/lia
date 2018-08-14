import * as actionTypes from './types';

import { createTime, createTimestamp } from '../lib/utils/timeline';

export const addEvent = (startingTime, event) => ({
  type: actionTypes.TIMELINE_EVENT,
  payload: {
    event: {
      ...event,
      ts: createTimestamp(startingTime),
    }
  },
});

export const resetStartingTime = () => ({
  type: actionTypes.TIMELINE_STARTING_TIME_RESET,
  payload: {
    startingTime: createTime(),
  },
});