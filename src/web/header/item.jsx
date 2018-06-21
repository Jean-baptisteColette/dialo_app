import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleRight } from '@fortawesome/free-solid-svg-icons'
class Item extends Component {

    toggle() {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        if (this.props.Toggle !== undefined && this.props.Name !== undefined) {
            return (


                <Link className="item-container linkMenu" to="/header">
                <FontAwesomeIcon icon={faCoffee} size="lg" className="iconMenu" />
                 <span className={this.props.Toggle === false ? 'linkMenu hide' : 'linkMenu'}> Header </span>
                 <FontAwesomeIcon icon={faAngleRight} size="xs" className={this.props.Toggle === false ? ' angleRight hide' : 'angleRight'} />
                 </Link>


            )
        }
        else
            return false;
    }
}
//                <FontAwesomeIcon icon={faAngleRight} size="lg" className="iconMenu" />
//<a className="itemNav"><FontAwesomeIcon icon={faCoffee} size="lg" className="iconMenu" /><span className={this.props.Toggle === false ? 'itemName hide' : 'itemName'}>{this.props.Name}</span></a>
export default connect()(Item);