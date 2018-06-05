import store from 'flux/redux';

export default class SessionHelper {
  static hasSessionActive() {
    return !!store.getState().session.first();
  }

  static getHeaderAuthorization() {
    const session = store.getState().session.first();
    if (!session) {
      return null;
    }
    return `Bearer ${session.get('token')}`;
  }
}