import {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import {
  localAllDelete,
} from '../../flux/session/action';

import Touchable from '../base/touchable';

import Color from '../../style/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: Color.RED1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Touchable
          onPress={this.props.localAllDelete}
          style={styles.button}
        >
          <Text style={styles.text}>Deconnexion</Text>
        </Touchable>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToPropsTransient = (dispatch) => {
  return {
    localAllDelete: bindActionCreators(localAllDelete, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToPropsTransient)(Home);
