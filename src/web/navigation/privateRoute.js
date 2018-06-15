import React from 'react';

import {
  Route,
  Redirect,
} from 'react-router-dom';
import SessionHelper from 'helpers/session';

// change from funcitonal component to
// redux connected component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      SessionHelper.hasSessionActive() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default PrivateRoute;