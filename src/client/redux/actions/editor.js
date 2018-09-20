// delete
import * as actionTypes from './index';

import { createTimestamp } from './../../utils/timeline';

export const addEditorChange = (startingTime, eventData, newCode) => ({
  type: actionTypes.EDITOR_CHANGE_EVENT,
  payload: {
    code: newCode,
    event: {
      data: eventData,
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
