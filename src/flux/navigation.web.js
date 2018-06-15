// NavigationService.js
import { dispatch } from 'flux/redux';
import * as Actions from 'connected-react-router'

class NavigationFlux {
  navigate(params, action) {
    dispatch(Actions[action](params));
  }
}

export default new NavigationFlux();