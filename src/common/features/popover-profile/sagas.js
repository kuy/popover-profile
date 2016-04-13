import { fork, take, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import { actions as tooltip } from 'redux-tooltip';

const DATA = {
  apple: { name: 'Apple User', letter: 'A' },
  banana: { name: 'Banana User', letter: 'B' },
  cinamon: { name: 'Cinamon User', letter: 'C' },
};

function fetchProfileData(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = DATA[username];
      if (data) {
        resolve(data);
      } else {
        reject(true);
      }
    }, 500 + 500 * Math.random());
  })
    .then(data => ({ data }))
    .catch(error => ({ error }));
}

function* triggerRequest() {
  while (true) {
    const { payload: { username } } = yield take(actions.SHOW_PROFILE);
    yield put(actions.requestProfileData());
    const { data, error } = yield call(fetchProfileData, username);
    if (data && !error) {
      yield put(actions.successProfileData(data));
    } else {
      yield put(actions.failureProfileData());
    }
  }
}

function* showTooltip() {
  while (true) {
    const { payload: { el } } = yield take(actions.SHOW_PROFILE);
    yield put(tooltip.show({ name: 'popover-profile', origin: el }));
  }
}

function* hideTooltip() {
  while (true) {
    yield take(actions.HIDE_PROFILE);
    yield put(tooltip.hide({ name: 'popover-profile' }));
  }
}

export default function* rootSaga() {
  yield fork(triggerRequest);
  yield fork(showTooltip);
  yield fork(hideTooltip);
}
