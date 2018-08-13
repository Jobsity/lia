import * as actionTypes from './types';

export const addEditorChange = (change, code) => ({
  type: actionTypes.EDITOR_CHANGE_ADD,
  payload: {
    change,
    code,
  },
});

export const setEditorCode = code => ({
  type: actionTypes.EDITOR_VALUE_SET,
  payload: {
    code,
  },
})
