import {
  bindActionCreators,
} from 'redux';
import store, {
  dispatch,
} from './redux';

import {
  create as createSession,
  localAllDelete as localAllDeleteSession,
} from 'flux/session/action';

ReduxHack = { store, dispatch };

actions = bindActionCreators({
  // session
  createSession,
  localAllDeleteSession,

}, dispatch);

for (let action in actions) {
  ReduxHack[action] = actions[action];
}

export default ReduxHack;
