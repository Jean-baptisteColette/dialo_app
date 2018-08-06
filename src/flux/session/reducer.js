import BaseEntityReducer from '../baseEntityReducer';

import {
  SESSION_CREATE,
} from './type';

export default BaseEntityReducer.createEntitiesReducer({
  entityName: 'session',

  extendReducer: (state, action) => {
    switch (action.type) {
      case SESSION_CREATE:
        return state.set(SESSION_CREATE, action.status);

      default:
        return state;
    }
  },
});
