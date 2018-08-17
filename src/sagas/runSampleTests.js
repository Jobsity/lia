import { take, call, put }  from 'redux-saga/effects';
import { runTests } from '../modules/api';
import { createTimestamp } from '../lib/utils/timeline';

import { RUN_SAMPLE_TESTS_START, RUN_SAMPLE_TESTS_SUCCESS, RUN_SAMPLE_TESTS_ERROR } from '../actions/types';

function* runSampleTests(payload) {
  const { requestData, startingTime } = payload;
  const response = yield call(runTests, requestData);
  if (Object.prototype.hasOwnProperty.call(response, 'error')) {
    yield put({
      type: RUN_SAMPLE_TESTS_ERROR,
      payload: { error: response.error},
    })
  } else if (response.status === 200) {
    yield put({
      type: RUN_SAMPLE_TESTS_SUCCESS,
      payload: {
        results: response.data,
        event: {
          data: response.data,
          ts: createTimestamp(startingTime),
          type: 'output',
        }
      },
    });
  }
}

export default function* watchRunSampleTests() {
  const action = yield take(RUN_SAMPLE_TESTS_START);
  yield* runSampleTests(action.payload);
}