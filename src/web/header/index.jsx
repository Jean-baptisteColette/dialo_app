import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';

import Item from './item';
import Profil from './profil';

import {
    connect,
} from 'react-redux';

import Leaf from "image/leaf.svg";
import File from "image/file.svg";
import Bars from "image/bars.svg";
import Icon from "../sharedComponent/Icon"

const routes = {
    auth: ["/auth", "Connexion"],
    tutu: ["/documents", "Documents"],
    toto: ["/register", "S'inscrire"],
};

class Header extends Component {

    static propTypes = {
        position: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle() {
        this.setState({
            ...this.state,
            toggle: !this.state.toggle,
        });
    }

    render() {
        return (
        <div >
            <nav className={this.state.toggle === false ? "myNav animateClose" : "myNav animateOpen"} id="myNav">
                <div className="logo-container ">
                    <Icon icon={Leaf} name="leaf" size={35}/>
                    {this.state.toggle === true && <div className="AppName"> DIALOGRAM </div>}
                </div>
                {this.state.toggle === true ? <div className="labelNav">
                    <div className="labelNavContent">Navigation </div>
                </div> : <div className="navSeparator">Navigation </div>}
                <Item icon={File} iconName="file" to={routes.tutu[0]} toggle={this.state.toggle} name={routes.tutu[1]} active={routes.tutu[0] === this.props.position ? true : false} />
                {this.state.toggle === true ? <div className="labelNav">
                    <div className="labelNavContent">Espace Perso </div>
                </div> : <div className="navSeparator">Espace Perso </div>}
                <Item icon={File} iconName="file" to={routes.auth[0]} toggle={this.state.toggle} name={routes.auth[1]} active={routes.auth[0] === this.props.position ? true : false} />
                <Item icon={File} iconName="file" to={routes.toto[0]} toggle={this.state.toggle} name={routes.toto[1]} active={routes.toto[0] === this.props.position ? true : false} />
            </nav>
            <div className="header-nav">
                <div className=" toggleMenu" onClick={this._toggle} >
                    <Icon icon={Bars} name={"bars"} size={35} />
                </div>
                <Profil />
            </div>

        </div>
        )
    }

}

const mapStateToProps = (state, ownProps, history) => {
    return {
        position: state.router.location.pathname
    }
};

export default connect(mapStateToProps, null)(Header);