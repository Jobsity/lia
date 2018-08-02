import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

const rootReducer = combineReducers({

});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
);

export default store;
