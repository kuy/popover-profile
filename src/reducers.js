import { combineReducers } from 'redux';
import { reducer as tooltip } from 'redux-tooltip';

const initial = {};

function app(state = initial, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default combineReducers(
  { app, tooltip }
);
