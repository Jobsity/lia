import * as actionTypes from './types';

import { createTime, createTimestamp } from '../lib/utils/timeline';

export const addEvent = (startingTime, type, data) => ({
  type: actionTypes.TIMELINE_EVENT,
  payload: {
    event: {
      data,
      ts: createTimestamp(startingTime),
      type,
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