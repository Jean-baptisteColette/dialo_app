import BaseEntityReducer from 'flux/baseEntityReducer';

import {
  SESSION_CREATE,
} from 'flux/session/type';

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
