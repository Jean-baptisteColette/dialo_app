import './config';
import store, { loadPersistStore } from 'flux/redux';
import NavigationFlux from 'flux/navigation';

import {
  Component,
} from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Home from './home';
import Auth from './auth';
import SessionHelper from '../helpers/session';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
class Loading extends Component {
  constructor() {
    super();

    loadPersistStore(() => {
      if (SessionHelper.hasSessionActive()) {
        return this.props.navigation.navigate('Home');
      } else {
        return this.props.navigation.navigate('Auth');
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({ Home });
const AuthStack = createStackNavigator({ Auth });

const Navigator = createSwitchNavigator(
  {
    Loading,
    Home: HomeStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          ref={navigatorRef => {
            NavigationFlux.setTopLevelNavigator(navigatorRef);
          }}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('dialo_mobile', () => App);