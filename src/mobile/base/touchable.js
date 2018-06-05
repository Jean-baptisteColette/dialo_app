import {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const LOLLIPOP = 21;

export default class TouchableItem extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    delayPressIn: PropTypes.number,
    borderless: PropTypes.bool,
    pressColor: PropTypes.string,
    pressOpacity: PropTypes.number,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    pressColor: 'rgba(255, 255, 255, .4)',
  };

  _handlePress = () => {
    global.requestAnimationFrame(this.props.onPress);
  };

  render() {
    const { style, pressOpacity, pressColor, borderless, ...rest } = this.props;

    if (Platform.OS === 'android' && Platform.Version >= LOLLIPOP) {
      return (
        <TouchableNativeFeedback
          {...rest}
          onPress={this._handlePress}
          background={TouchableNativeFeedback.Ripple(pressColor, borderless)}
        >
          <View style={style}>{React.Children.only(this.props.children)}</View>
        </TouchableNativeFeedback>
      );
    } else {
      return (
        <TouchableOpacity
          {...rest}
          onPress={this._handlePress}
          style={style}
          activeOpacity={pressOpacity}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }
  }
}