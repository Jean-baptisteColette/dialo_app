import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class Profil extends Component {

    render() {
       return (<div className="profil"> <p className="userName">François Bêche</p> <FontAwesomeIcon icon={faUserCircle} size="lg" className="userAvatar" /></div>) 
    }
}
export default connect()(Profil);