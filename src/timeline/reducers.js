import { combineReducers } from 'redux';
import { reducer as profile } from '../common/features/popover-profile';
import { reducer as tooltip } from 'redux-tooltip';

const initial = {
  items: [
    { id: 2, body: '@cinamon @banana Yes, using in production.', username: 'apple', at: 1459923834438 },
    { id: 1, body: '@cinamon Not yet. How about you, @apple ?', username: 'banana', at: 1459921468422 },
    { id: 0, body: "@banana Are you using Redux?", username: 'cinamon', at: 1459919080706 },
  ]
};

function app(state = initial, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default combineReducers(
  { app, profile, tooltip }
);
