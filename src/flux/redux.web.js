import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import session from './session/reducer';
import user from './user/reducer';

const history = createBrowserHistory();

const reducer = combineReducers({
  session,
  user,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [immutableTransform()],
  whitelist: [
    'session',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middlewares = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(connectRouter(history)(persistedReducer), composeEnhancers(applyMiddleware(...middlewares)));

export const loadPersistStore = (cb) => {
  return persistStore(store, null, cb);
};

const dispatch = store.dispatch;

export {
  dispatch,
  history,
};
export default store;