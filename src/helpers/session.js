import store from '../flux/redux';
import Immutable from 'immutable';

export default class SessionHelper {
  static hasSessionActive() {
    return !!store.getState().session.first();
  }

  static getHeaderAuthorization() {
    const session = store.getState().session.first();
    if (!session || !Immutable.Map.isMap(session)) {
      return null;
    }
    return `Bearer ${session.get('token')}`;
  }
}
