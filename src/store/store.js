import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  temp: () => {return {}}
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // Keep logger as the last middleware
  applyMiddleware(sagaMiddleware, logger),
);

export default store;
