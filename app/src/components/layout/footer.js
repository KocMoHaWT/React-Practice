import React, {Component} from 'react';
import {ReactComponent as Logo} from "../../images/logo-streetcorner.svg";

class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="/"><Logo/></a>
                <div className="info">
                    <p>Made by Vladislav Dontsov</p>
                    <p>My GIT : <a href="https://github.com/KocMoHaWT">My GIT account</a></p>
                    <p>Original design : <a href="http://clients.onix-systems.com/ds_street_corner/">Template</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;