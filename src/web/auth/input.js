import React, {
  Component,
} from 'react';

class Input extends Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.autofocus && !this.props.hide) {
      this.inputRef.current.select();
    }
    if (this.props.value !== this.inputRef.current.value) {
      this._handleChange();
    }
  }

  _handleChange() {
    this.props.onChange(this.props.id, this.inputRef.current.value);
  }

  render() {
    return (
      <div className={'auth-input'}>
        <label className={'auth-input-label'}>
          {this.props.label}
        </label>
        <input
          ref={this.inputRef}
          className={'auth-input-text'}
          value={this.props.value === null ? this.props.defaultValue : this.props.value}
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          autoComplete={this.props.autocomplete}
          onChange={this._handleChange}
          onFocus={this.props.onFocus}
          onBlur={this.handleBlur}
          required={this.props.required}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

export default Input;