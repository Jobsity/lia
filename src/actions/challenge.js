import { UPDATE_CURRENT_TESTS, RESET_EDITORS } from './types';

export function updateCurrentTests(newTests) {
  return {
    type: UPDATE_CURRENT_TESTS,
    payload: { newTests },
  };
}


export function resetEditors(language) {
  return {
    type: RESET_EDITORS,
    payload: { language },
  };
}