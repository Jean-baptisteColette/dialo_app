import BaseApi from '../baseApi';

class SessionApi extends BaseApi {
  static create({ email, password }) {
    return this.post('/api/session', { email, password });
  }
}

export default SessionApi;
