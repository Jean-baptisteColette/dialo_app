import {
  Component,
} from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Touchable from 'component/base/touchable';

import Color from 'style/color';

import {
  SESSION_CREATE,
} from 'flux/session/type';
import {
  LOADING,
} from 'flux/baseType';
import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import {
  create as createSession,
} from 'flux/session/action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  textInput: {
    backgroundColor: Color.BACKGROUND,
    marginVertical: 5,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: Color.BLUE1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

class Auth extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: false,
    };
    this._signIn = this._signIn.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.status === LOADING) {
      return {
        ...state,
        disabled: true,
      };
    }
    return {
      ...state,
      disabled: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          key={'email'}
          placeholder={'email'}
          multiline={false}
          underlineColorAndroid={'transparent'}
          style={styles.textInput}
          keyboardType={'email-address'}
          onChangeText={(text) => this.setState({ ...this.state, email: text })}
        />
        <TextInput
          key={'password'}
          placeholder={'password'}
          multiline={false}
          underlineColorAndroid={'transparent'}
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ ...this.state, password: text })}
        />
        <Touchable
          onPress={this._signIn}
          style={styles.button}
          disabled={this.state.disabled}
        >
          {
            this.state.disabled
            && <ActivityIndicator color={'white'}/>
            || <Text style={styles.text}>Connexion</Text>
          }
        </Touchable>
      </View>
    );
  }

  _signIn() {
    this.props.createSession({
      email: this.state.email,
      password: this.state.password,
      from: 'Home',
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.session.get(SESSION_CREATE),
  };
};

const mapDispatchToPropsTransient = (dispatch) => {
  return {
    createSession: bindActionCreators(createSession, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToPropsTransient)(Auth);