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

export const resetTimeline = () => ({
  type: actionTypes.TIMELINE_RESET,
  payload: {
    events: [],
    startingTime: createTime(),
  },
});