import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import Item from './item.jsx'

import Profil from './profil';

import Leaf from "image/leaf.svg";
import File from "image/file.svg";
import Bars from "image/bars.svg";
import Icon from "../sharedComponent/Icon"
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            route: {
                auth: ["/auth", "Connexion"],
                tutu: ["/documents", "Documents"],
                toto: ["/register", "S'inscrire"],
                //tete: ["/tete", "Tete"],
            }

        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle() {
        this.setState({ toggle: !this.state.toggle });
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
                <Item icon={File} iconName="file" to={this.state.route.tutu[0]} toggle={this.state.toggle} name={this.state.route.tutu[1]} active={this.state.route.tutu[0] === this.props.position ? true : false} />
                {this.state.toggle === true ? <div className="labelNav">
                    <div className="labelNavContent">Espace Perso </div>
                </div> : <div className="navSeparator">Espace Perso </div>}
                <Item icon={File} iconName="file" to={this.state.route.auth[0]} toggle={this.state.toggle} name={this.state.route.auth[1]} active={this.state.route.auth[0] === this.props.position ? true : false} />
                <Item icon={File} iconName="file" to={this.state.route.toto[0]} toggle={this.state.toggle} name={this.state.route.toto[1]} active={this.state.route.toto[0] === this.props.position ? true : false} />
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

const mapDispatchToPropsTransient = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToPropsTransient)(Header);