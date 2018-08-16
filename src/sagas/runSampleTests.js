import { take, call, put }  from 'redux-saga/effects';
import { runTests } from '../modules/api';
import { RUN_SAMPLE_TESTS_START, RUN_SAMPLE_TESTS_SUCCESS, RUN_SAMPLE_TESTS_ERROR } from '../actions/types';

function* runSampleTests(data) {
  const response = yield call(runTests, data);
  if (Object.prototype.hasOwnProperty.call(response, 'error')) {
    yield put({
      type: RUN_SAMPLE_TESTS_ERROR,
      payload: { error: response.error},
    })
  } else if (response.status === 200) {
    yield put({
      type: RUN_SAMPLE_TESTS_SUCCESS,
      payload: { results: response.data },
    });
  }
}

export default function* watchRunSampleTests() {
  const action = yield take(RUN_SAMPLE_TESTS_START);
  yield* runSampleTests(action.payload);
}