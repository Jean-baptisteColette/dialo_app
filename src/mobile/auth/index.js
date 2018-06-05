import {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Touchable from 'component/base/touchable';

import Color from 'style/color';

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
    };
    this._signIn = this._signIn.bind(this);
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
        >
          <Text style={styles.text}>Connexion</Text>
        </Touchable>
      </View>
    );
  }

  _signIn() {
    this.props.createSession({
      email: this.state.email,
      password: this.state.password,
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToPropsTransient = (dispatch) => {
  return {
    createSession: bindActionCreators(createSession, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToPropsTransient)(Auth);