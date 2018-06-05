import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import session from './session/reducer';
import user from './user/reducer';

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

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

// Hack Redux that makes possible to call redux action from chrome debugger
// We have to keep update this class if we want to access any action
import ReduxHack from './ReduxHack';
const _window = global || window;
_window.Redux = store;
_window.ReduxHack = ReduxHack;

export const loadPersistStore = (cb) => {
  return persistStore(store, null, cb);
};

export const dispatch = store.dispatch;

export default store;