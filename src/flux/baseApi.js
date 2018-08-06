import _ from 'underscore';
import Qs from 'qs';
import axios from 'axios';

import SessionHelper from '../helpers/session';

import { fromJS } from 'immutable';
import ReduxHack from './ReduxHack';

class BaseAPI {

  static _mapType(type) {
    type = type.toLowerCase();
    switch (type) {
      case 'webfile':
      case 'weblink':
      case 'googlefile':
      case 'evernotefile':
        return 'media';
      default:
        return type;
    }
  }

  static _formatArray(included) {
    const keyedIncluded = {};

    included.forEach((data) => {
      const type = BaseAPI._mapType(data.type);
      const id = data.id;

      if (!keyedIncluded[type]) {
        keyedIncluded[type] = {};
      }
      keyedIncluded[type][id] = data;
    });
    return keyedIncluded;
  }

  static _status(response) {
    if (response && response.status) {
      if (200 <= response.status && response.status < 300) {
        return Promise.resolve(response);
      } else if (response.status === 401 && SessionHelper.hasSessionActive()) {
        ReduxHack.deleteAllLocalSession();
      }
    }
    return Promise.reject(response);
  }

  static _json(response) {
    if (response.status !== 204) {
      return response.data || response.json();
    } else {
      return {};
    }
  }

  static _serializeResp(json) {
    return new Promise((resolve) => {
      json.data = BaseAPI._formatArray(json.data);
      if (json.includes) {
        json.includes = BaseAPI._formatArray(json.includes);
      }
      const immutableData = fromJS(json);
      resolve(immutableData);
    });
  }

  static _getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
    const headerAuthorization = SessionHelper.getHeaderAuthorization();
    if (headerAuthorization) {
      headers['Authorization'] = headerAuthorization;
    }
    return headers;
  }

  static _sendRequest(method, url, params = {}) {
    params = _.extend({
      method,
      url,
      baseURL: window.APP_CONFIG.API_ROOT,
      paramsSerializer(params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' });
      },
      headers: BaseAPI._getHeaders(),
    }, params);

    return axios(params)
      .then(
        BaseAPI._status,
        error => {
          if (axios.isCancel(error)) { throw error; }
          return BaseAPI._status(error.response);
        })
      .then(BaseAPI._json)
      .then(BaseAPI._serializeResp);
  }

  static post(url, data) {
    return BaseAPI._sendRequest('post', url, { data });
  }

  static put(url, data) {
    return BaseAPI._sendRequest('put', url, { data });
  }

  static delete(url, data) {
    return BaseAPI._sendRequest('delete', url, { data });
  }

  static get(url, data) {
    return BaseAPI._sendRequest('get', url, { params: data });
  }
}

export default BaseAPI;
