import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
        <div className="container">
            <form>
                <ul className="flex-outer">
                    <div className="register-header-container">
                        <Link className="register-header-button  disabled" to={"/auth"}>CONNEXION</Link>
                        <Link className="register-header-button" to={"/register"}>INSCRIPTION</Link>
                    </div>
                    <li><h2> Inscription</h2></li>
                    <li><div className="separator"></div></li>
                    <li>
                        <label >Prénom</label>
                        <input type="text" id="first-name" placeholder="Prénom" />
                    </li>
                    <li>
                        <label >Nom</label>
                        <input type="text" id="last-name" placeholder="Nom" />
                    </li>
                    <li>
                        <label>E-mail</label>
                        <input type="email" id="email" placeholder="Email" />
                    </li>
                    <li>
                        <label >Mot de passe</label>
                        <input type="password" id="password" placeholder="Mot de passe" />
                    </li>
                    <li>
                        <label >Mot de passe</label>
                        <input type="password" id="passwordConf" placeholder="Mot de passe (confirmation)" />
                    </li>
                    <li>
                        <p>CGU</p>
                        <ul className="flex-inner">

                            <li>
                                <input type="checkbox" id="twenty-to-twentynine" />
                                <label ></label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="register-submit" type="submit">S'inscrire</button>
                    </li>
                </ul>
            </form>
        </div>
        );
    }
}

export default connect()(Register);