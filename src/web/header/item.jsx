import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import { Link } from 'react-router-dom'

import Icon from "../sharedComponent/Icon"
import AngleRightIcon from "../../image/angle-right.svg";

class Item extends Component {
    render() {
        const AngleRight = () => {
            if (this.props.Active === false) {
                return <div className="angleRight" ><Icon icon={AngleRightIcon} name={"angle-right"} size={20} cssColor={'iconColor '} /></div>
            }
            return false;
        }
        if (this.props.IconName !== undefined && this.props.Icon !== undefined && this.props.Toggle !== undefined && this.props.Name !== undefined && this.props.Active !== undefined && this.props.To !== undefined) {
            return (
                <Link className={this.props.Active === true ? "item-container linkMenu active" : "item-container linkMenu "} to={this.props.To}>
                    <div className='iconMenu'>
                        <Icon icon={this.props.Icon} name={this.props.IconName} size={35}/>
                    </div>
                    <p className={'linkMenuName'}>{this.props.Name} </p>
                    <AngleRight />
                </Link>
            )
        }
        else
            return false;
    }
}
export default connect()(Item);