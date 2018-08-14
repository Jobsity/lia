import * as actionTypes from './types';

import { createTimestamp } from '../lib/utils/timeline';

export const addEditorChange = (startingTime, eventData, newCode) => ({
  type: actionTypes.EDITOR_CHANGE_EVENT,
  payload: {
    code: newCode,
    event: {
      data: eventData,
      descr: '',
      highlighted: false,
      ts: createTimestamp(startingTime),
      type: 'editor',
    },
  }
});

export const setEditorCode = code => ({
  type: actionTypes.EDITOR_VALUE_SET,
  payload: {
    code,
  },
})
