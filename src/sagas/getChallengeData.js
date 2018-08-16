import { takeEvery, call, put }  from 'redux-saga/effects';
import { fetchChallengeData } from '../modules/api';
import { FETCH_CHALLENGE_DATA_START, FETCH_CHALLENGE_DATA_SUCCESS, FETCH_CHALLENGE_DATA_ERROR } from '../actions/types';

function* getChallengeData() {
  const response = yield call(fetchChallengeData);
  if (Object.prototype.hasOwnProperty.call(response, 'error')) {
    yield put({
      type: FETCH_CHALLENGE_DATA_ERROR,
      payload: { error: response.error}
    })
  } else if (response.status === 200) {
    const dataParsed = {
      difficulty: response.data.data.difficultyLevel,
      languages: response.data.data.languages,
      testSuite: response.data.data.testSuite,
    };
    yield put({
      type: FETCH_CHALLENGE_DATA_SUCCESS,
      payload: { data: dataParsed },
    });
  }
}

export default function* watchGetChallengeData() {
  yield takeEvery(FETCH_CHALLENGE_DATA_START, getChallengeData);
}

