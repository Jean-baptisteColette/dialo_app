import { version } from '../../package.json';
import React from 'react';
import Immutable from 'immutable';

import store from 'flux/redux';
// Hack Redux that makes possible to call redux action from chrome debugger
// We have to keep update this class if we want to access any action
import ReduxHack from 'flux/ReduxHack';

const _window = window;

const CONFIGS = {
  dev: {
    API_ROOT: 'http://localhost:3000',
  },
  production: {
    API_ROOT: 'http://localhost:3000',
  },
};

// Global variables
_window.__DEV__ = process.env.NODE_ENV === 'development';
_window.React = React;
_window.Redux = store;
_window.ReduxHack = ReduxHack;
_window.Immutable = Immutable;
_window.APP_CONFIG = (_window.__DEV__ && CONFIGS.dev) || CONFIGS.production;
_window.isWeb = true;

_window.APP_CONFIG.VERSION = version;

// Use this for logging response in dev mode
_window.APP_CONFIG.DEBUG_API = _window.__DEV__;

export default _window.APP_CONFIG;