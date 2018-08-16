import { take, call, put }  from 'redux-saga/effects';
import { submitChallengeData } from '../modules/api';
import { SUBMIT_CHALLENGE_START, SUBMIT_CHALLENGE_SUCCESS, SUBMIT_CHALLENGE_ERROR } from '../actions/types';

function* submitChallenge(data) {
  const response = yield call(submitChallengeData, data);
  if (Object.prototype.hasOwnProperty.call(response, 'error')) {
    yield put({
      type: SUBMIT_CHALLENGE_ERROR,
      payload: { error: response.error},
    })
  } else if (response.status === 200) {
    yield put({
      type: SUBMIT_CHALLENGE_SUCCESS,
      payload: { results: response.data },
    });
  }
}

export default function* watchSubmitChallenge() {
  const action = yield take(SUBMIT_CHALLENGE_START);
  yield* submitChallenge(action.payload);
}