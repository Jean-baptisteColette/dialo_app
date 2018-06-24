import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';


class Register extends Component {
    render() {
        return (<div class="container">

            <form>
                <ul class="flex-outer">
                    <li><h2> Inscription </h2></li>
                    <li><div className="separator"></div></li>
                    <li>
                        <label for="first-name">Prénom</label>
                        <input type="text" id="first-name" placeholder="Prénom" />
                    </li>
                    <li>
                        <label for="last-name">Nom</label>
                        <input type="text" id="last-name" placeholder="Nom" />
                    </li>
                    <li>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="Email" />
                    </li>
                    <li>
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" placeholder="Mot de passe" />
                    </li>
                    <li>
                        <label for="password">Mot de passe</label>
                        <input type="password" id="passwordConf" placeholder="Mot de passe (confirmation)" />
                    </li>
                    <li>
                        <p>CGU</p>
                        <ul class="flex-inner">
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>
                                <input type="checkbox" id="twenty-to-twentynine" />
                                <label for="twenty-to-twentynine"></label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="register-submit" type="submit">S'inscrire</button>
                    </li>
                </ul>
            </form>
        </div>);
    }
}

export default connect()(Register);