// NavigationService.js

import { NavigationActions } from 'react-navigation';

class NavigationFlux {
  constuctor() {
    this._navigator = null;
  }

  setTopLevelNavigator(navigatorRef) {
    this._navigator = navigatorRef;
  }

  navigate(routeName, params) {
    this._navigator && this._navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }
}

export default new NavigationFlux();