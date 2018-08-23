import { takeEvery, call, put }  from 'redux-saga/effects';
import { fetchSessionData } from '../modules/api';
import { FETCH_SESSION_DATA_START, FETCH_SESSION_DATA_SUCCESS, FETCH_SESSION_DATA_ERROR } from '../actions/types';

function* getSessionData(payload) {
  const { token } = payload.payload;
  const response = yield call(fetchSessionData, token);
  if (Object.prototype.hasOwnProperty.call(response, 'error')) {
    yield put({
      type: FETCH_SESSION_DATA_ERROR,
      payload: { error: response.error}
    })
  } else if (response.status === 200) {
    const dataParsed = {
      user: {
        id: response.data.data.user.id,
        name: response.data.data.user.name,
        role: response.data.data.user.roles[0],
      },
      session: response.data.data.session,
      language: response.data.data.session.language,
      isLive: response.data.data.session.active == 1,
    };
    yield put({
      type: FETCH_SESSION_DATA_SUCCESS,
      payload: { data: dataParsed },
    });
  }
}

export default function* watchGetSessionData() {
  yield takeEvery(FETCH_SESSION_DATA_START, getSessionData);
}

