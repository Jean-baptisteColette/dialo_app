import React from 'react';

/**
 * Icon compone is shared component relative to the entier web application
 * cssColor => css class containing a color
 * name => name of icon (check svg)
 */

const Icon = (props) => {
    return (
        <svg width={props.size} height={props.size}>
            <use xlinkHref={`${props.icon}#icon-${props.name}`} />
        </svg>
    ); 
};

Icon.protoTypes = {

};

export default Icon;