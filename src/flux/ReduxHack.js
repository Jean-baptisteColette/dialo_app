import {
  bindActionCreators,
} from 'redux';
import store, {
  dispatch,
} from './redux';

import {
  create as createSession,
  localAllDelete as localAllDeleteSession,
} from './session/action';

let ReduxHack = { store, dispatch };

let actions = bindActionCreators({
  // session
  createSession,
  localAllDeleteSession,

}, dispatch);

for (let action in actions) {
  ReduxHack[action] = actions[action];
}

export default ReduxHack;
