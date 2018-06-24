import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import Item from '../header/item'
//import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLeaf, faFile, faBook } from '@fortawesome/free-solid-svg-icons'
import Profil from './profil';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            route: {
                auth: ["/auth", "Connexion"],
                tutu: ["/tutu", "Documents"],
                toto: ["/register", "S'inscrire"],
                tete: ["/tete", "Tete"],
                member: ["/member", "Membre"]
            }

        }
        console.log("xd", this.props.position);
        this.toggle = this.toggle.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }
    toggle() {
        this.setState({ toggle: !this.state.toggle })
    }

    getLocation() {
        console.log("iohoih", this.props.location);
        return '';
    }

    render() {
        //"/auth" === this.props.location.pathname? true : 
        return (<div >
            <nav className={this.state.toggle === false ? "myNav animateClose" : "myNav animateOpen"} id="myNav">
                <div className="logo-container ">
                    <FontAwesomeIcon icon={faLeaf} size="lg" className="logoApp" />
                    {this.state.toggle === true && <div className="AppName"> DIALOGRAM </div>}
                </div>
                {this.state.toggle === true ? <div className="labelNav">
                    <div className="labelNavContent">Navigation </div>
                </div> : <div className="navSeparator">Navigation </div>}

                <Item Icon={faFile} To={this.state.route.tutu[0]} Toggle={this.state.toggle} Name={this.state.route.tutu[1]} Active={this.state.route.tutu[0] === this.props.position ? true : false} />
                <Item Icon={faBook} To={this.state.route.tete[0]} Toggle={this.state.toggle} Name={this.state.route.tete[1]} Active={this.state.route.tete[0] === this.props.position ? true : false} />
                <Item Icon={faBook} To={this.state.route.member[0]} Toggle={this.state.toggle} Name={this.state.route.member[1]} Active={false} />
                <Item Icon={faBook} To={"/auth"} Toggle={this.state.toggle} Name={"item n°2"} Active={false} />
                <Item Icon={faBook} To={"/auth"} Toggle={this.state.toggle} Name={"item n°3"} Active={false} />
                <Item Icon={faBook} To={"/auth"} Toggle={this.state.toggle} Name={"item n°4"} Active={false} />
                {this.state.toggle === true ? <div className="labelNav">
                    <div className="labelNavContent">Espace Perso </div>
                </div> : <div className="navSeparator">Espace Perso </div>}
                <Item Icon={faBook} To={this.state.route.auth[0]} Toggle={this.state.toggle} Name={this.state.route.auth[1]} Active={this.state.route.auth[0] === this.props.position ? true : false} />
                <Item Icon={faBook} To={this.state.route.toto[0]} Toggle={this.state.toggle} Name={this.state.route.toto[1]} Active={this.state.route.toto[0] === this.props.position ? true : false} />


            </nav>
            <div className="header-nav">
                <FontAwesomeIcon className="toggleMenu" onClick={this.toggle} icon={faBars} size="lg" />
                <Profil />
            </div>

        </div>)
    }


}

const mapStateToProps = (state, ownProps, history) => {
    return {
        position: state.router.location.pathname
    }
};

const mapDispatchToPropsTransient = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToPropsTransient)(Header);