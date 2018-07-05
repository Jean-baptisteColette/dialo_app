import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import { Link } from 'react-router-dom'

import Icon from "../sharedComponent/Icon"
import AngleRightIcon from "image/angle-right.svg";

class Item extends Component {
    constructor() {
        super();

        this._renderAngleRight = this._renderAngleRight.bind(this);
    }
    render() {
        if (this.props.iconName !== undefined && this.props.icon !== undefined && this.props.toggle !== undefined && this.props.name !== undefined && this.props.active !== undefined && this.props.to !== undefined) {
            return (
                <Link className={this.props.active === true ? "item-container linkMenu active" : "item-container linkMenu "} to={this.props.to}>
                    <div className='iconMenu'>
                        <Icon icon={this.props.icon} name={this.props.iconName} size={35}/>
                    </div>
                    <p className={'linkMenuName'}>{this.props.name} </p>
                    {this._renderAngleRight()}
                </Link>
            )
        }
        else
            return false;
    }

    _renderAngleRight = () => {
        if (this.props.active === false) {
            return <div className="angleRight" ><Icon icon={AngleRightIcon} name={"angle-right"} size={20} cssColor={'iconColor '} /></div>
        }
        return false;
    }
}
export default connect()(Item);