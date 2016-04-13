import {
  SHOW_PROFILE, HIDE_PROFILE,
  REQUEST_PROFILE_DATA, SUCCESS_PROFILE_DATA, FAILURE_PROFILE_DATA
} from './actions';

const initial = {
  show: null,
  data: null,
  status: '',
  error: false,
};

export default function profile(state = initial, action) {
  switch (action.type) {
  case SHOW_PROFILE:
    return { ...state, show: action.payload };
  case HIDE_PROFILE:
    return { ...state, show: null };
  case REQUEST_PROFILE_DATA:
    return { ...state, status: 'working', error: false };
  case SUCCESS_PROFILE_DATA:
    return { ...state, status: 'done', error: false, data: action.payload };
  case FAILURE_PROFILE_DATA:
    return { ...state, status: 'done', error: true };
  default:
    return state;
  }
}
