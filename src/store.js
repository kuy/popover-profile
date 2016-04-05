import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import reducer from './reducers';

export default function configureStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      createSagaMiddleware(saga),
      logger()
    )
  );
}
