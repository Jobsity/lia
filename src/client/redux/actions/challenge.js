// delete
import {
  UPDATE_CURRENT_TESTS,
  RESET_EDITORS,
  RUN_SAMPLE_TESTS_START,
  SUBMIT_CHALLENGE_START,
} from './types';

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

export function runTests(editorCode, currentTests, language, startingTime) {
  return ({
    type: RUN_SAMPLE_TESTS_START,
    payload: {
      requestData: {
        editorCode,
        tests: currentTests,
        language,
      },
      startingTime,
    },
  });
}

export function submitChallenge(editorCode, testSuite, language, startingTime) {
  return ({
    type: SUBMIT_CHALLENGE_START,
    payload: {
      requestData: {
        editorCode,
        tests: testSuite.filter(tests => tests.language === language)[0].tests,
        language,
      },
      startingTime,
    },
  });
}