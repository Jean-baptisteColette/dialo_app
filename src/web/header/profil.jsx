import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';


import Icon from "../sharedComponent/Icon"
import UserCircle from "../../image/user-circle.svg";

class Profil extends Component {
    render() {
       return (
       <div className="profil"> <p className="userName">François Bêche</p> 
       <Icon icon={UserCircle} name="user-circle" size={35} />
       </div>
       ) 
    }
}
export default connect()(Profil);