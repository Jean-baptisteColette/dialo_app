import React, {
  Component,
} from 'react';

import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import {
  localAllDelete,
} from 'flux/session/action';

class Home extends Component {

  constructor() {
    super();

    this._signOut = this._signOut.bind(this);
  }

  render() {
    return (
      <div className={'root-home-container'}>
        <button
          className={'home-signout-button'}
          onClick={this._signOut}
        >
          SE DECONNECTER
        </button>
      </div>
    );
  }

  _signOut(event) {
    this.props.localAllDelete('/auth');
    event.preventDefault();
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