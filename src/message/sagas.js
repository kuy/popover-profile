import { fork } from 'redux-saga/effects';
import { saga as profile } from '../common/features/popover-profile';

export default function* rootSaga() {
  yield fork(profile);
}
