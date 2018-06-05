import { version } from '../../package.json';
import React from 'react';
import ReactNative from 'react-native';
import store from 'flux/redux';
import ReduxHack from 'flux/ReduxHack';
import Immutable from 'immutable';

/** Allow to see network requests in Chrome when debugging **/
if (__DEV__) {
  global.XMLHttpRequest = global.originalXMLHttpRequest ?
    global.originalXMLHttpRequest :
    global.XMLHttpRequest;
}

const _window = global || window;

const CONFIGS = {
  dev: {
    API_ROOT: 'http://localhost:3000',
  },
  production: {
    API_ROOT: 'http://localhost:3000',
  },
};

// Global variables
_window.Redux = store;
_window.React = React;
_window.ReactNative = ReactNative;
_window.ReduxHack = ReduxHack;
_window.Immutable = Immutable;
_window.APP_CONFIG = (__DEV__ && CONFIGS.dev) || CONFIGS.production;

_window.APP_CONFIG.VERSION = version;

// Use this for logging response in dev mode
_window.APP_CONFIG.DEBUG_API = __DEV__;

console.ignoredYellowBox = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated',
];

export default _window.APP_CONFIG;