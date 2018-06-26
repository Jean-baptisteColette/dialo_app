import React, { Component, } from 'react';
import { connect, } from 'react-redux';

/**
 * Icon compone is shared component relative to the entier web application
 * cssColor => css class containing a color
 * name => name of icon (check svg)
 */

class Icon extends Component {
    render() {
        return (
            <svg  width={this.props.size} height={this.props.size}>
                <use xlinkHref={`${this.props.icon}#icon-${this.props.name}`} />
            </svg>
        );
    }
}
export default connect()(Icon);