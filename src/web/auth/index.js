import React, {
  Component,
} from 'react';

import {
  SESSION_CREATE,
} from 'flux/session/type';
import {
  FAILURE,
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

import Input from './input';

class Auth extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      showError: false,
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._signIn = this._signIn.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.status === LOADING) {
      return {
        ...state,
        disabled: true,
      };
    }
    if (props.status === FAILURE) {
      return {
        ...state,
        showError: true,
        disabled: !(state.email && state.password),
      };
    }
    return {
      ...state,
      disabled: !(state.email && state.password),
    };
  }

  render() {
    let buttonStyle = 'auth-input-button';
    if (this.state.disabled) {
      buttonStyle += ' auth-input-button-disabled';
    }
    return (
      <div className={'root-auth-container'}>
        <div className={'auth-container'}>
          <div className={'auth-container-content'}>
            <div className={'auth-content-header'}>
              <img
                alt={'logo'}
                className={'auth-content-header-logo'}
                src={require('image/logo.svg')}
              />
              <p className={'auth-content-header-text'}>
                Merci de vous connecter
							</p>
            </div>
            <form className={'auth-input-container'}>
              <Input
                id={'email'}
                type={'email'}
                label={'Email'}
                value={this.state.email}
                onChange={this._handleInputChange}
                autocomplete={'email'}
              />
              <Input
                id={'password'}
                type={'password'}
                label={'Password'}
                value={this.state.password}
                onChange={this._handleInputChange}
                autocomplete={'current-password'}
              />
              {this.state.showError &&
                this.props.status === 'failure' && (
                  <p className={'auth-error'}>Mauvais email ou mot de passe</p>
                )}
              <button
                className={buttonStyle}
                disabled={this.state.disabled}
                onClick={this._signIn}
              >
                SE CONNECTER
							</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  _handleInputChange(id, value) {
    this.setState({
      [id]: value,
      disabled: !(this.state.email && this.state.password && value),
      showError: false,
    });
  }

  _signIn(event) {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    this.props.createSession({
      email: this.state.email,
      password: this.state.password,
      from,
    });
    event.preventDefault();
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