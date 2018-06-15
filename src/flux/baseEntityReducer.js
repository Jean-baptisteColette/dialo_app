import {
  DISPATCH_ENTITIES,
  CLEAR_ENTITIES,
} from './baseType';

import _ from 'underscore';
import Immutable from 'immutable';

const defaultParams = {
  entityName: '',
  extendReducer: (state) => state,
};

const initialState = new Immutable.Map();

export default class BaseEntityReducer {
  static createEntitiesReducer(givenParams) {
    const params = _.defaults(givenParams, defaultParams);
    const { entityName, extendReducer } = params;

    return function reducer(state = initialState, action = {}) {
      let entities;

      switch (action.type) {
        case DISPATCH_ENTITIES:
          if (!action.entities) {
            return state;
          }
          entities = action.entities.get(entityName);
          return state.merge(entities);

        case CLEAR_ENTITIES:
          return new Immutable.Map();

        default:
          return (extendReducer && extendReducer(state, action)) || state;
      }
    };
  }
}
