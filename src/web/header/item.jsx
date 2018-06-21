import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
class Item extends Component {

    render() {
        const AngleRight = () =>{
            if (this.props.Active === false){
                return   <FontAwesomeIcon icon={faAngleRight} size="xs" className='angleRight' />
            }
            return false;
        }
        if (this.props.Icon !== undefined && this.props.Toggle !== undefined && this.props.Name !== undefined && this.props.Active !== undefined &&  this.props.To !== undefined) {
            return (
                <Link className={ this.props.Active === true ? "item-container linkMenu active" : "item-container linkMenu "} to={this.props.To}>
                   <FontAwesomeIcon icon={this.props.Icon} size="lg" className="iconMenu" />
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