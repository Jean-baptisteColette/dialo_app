import {
  SESSION_CREATE,
} from './type';
import {
  CLEAR_ENTITIES,
  DISPATCH_ENTITIES,

  LOADING,
  SUCCESS,
  FAILURE,
} from 'flux/baseType';

import SessionApi from './api';

import NavigationFlux from 'flux/navigation';

export function create({ email, password }) {
  return async function(dispatch, getState) {
    dispatch({
      type: SESSION_CREATE,
      status: LOADING,
    });

    try {
      let response = await SessionApi.create({ email, password });

      dispatch({
        type: DISPATCH_ENTITIES,
        entities: response.get('includes').merge(response.get('data')),
      });
      dispatch({
        type: SESSION_CREATE,
        status: SUCCESS,
        session: response.get('data'),
      });
      NavigationFlux.navigate('Home');
    } catch(err) {
      dispatch({
        type: SESSION_CREATE,
        status: FAILURE,
        err,
      });
    }
  };
}

export function localAllDelete() {
  return async function(dispatch, getState) {
    dispatch({
      type: CLEAR_ENTITIES,
    });
    NavigationFlux.navigate('Auth');
  };
}