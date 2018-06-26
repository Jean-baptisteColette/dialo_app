import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './config';
import 'css';
import store, { history, loadPersistStore } from 'flux/redux';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './navigation/privateRoute';

import {
  LOADING,
  SUCCESS,
} from 'flux/baseType';

import Auth from './auth';
import Register from './register';
import Home from './home';
import NotFound from './navigation/notFound';

import Header from './header';
class App extends Component {
  constructor() {
    super();

    this.state = {
      status: LOADING,
    };
    this.initStatus = LOADING;
    loadPersistStore(() => {
      this.setState({
        ...this.state,
        status: SUCCESS,
      });
    });
  }

  render() {
    if (this.state.status === LOADING) {
      // TODO render a design loading screen ?
      return false;
    }
    return (

      <Provider store={store}>
 
        <ConnectedRouter history={history}>
          <div>
          <Header/>
            <Switch>
              <PrivateRoute exact path={'/'} component={Home} />
              <Route path={'/auth'} component={Auth} />
              <Route path={'/register'} component ={Register} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
