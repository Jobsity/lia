import { UPDATE_CURRENT_TESTS, RESET_CURRENT_TESTS } from './types';

export function updateCurrentTests(newTests) {
  return {
    type: UPDATE_CURRENT_TESTS,
    payload: { newTests },
  };
}


export function resetCurrentTests(language) {
  return {
    type: RESET_CURRENT_TESTS,
    payload: { language },
  };
}