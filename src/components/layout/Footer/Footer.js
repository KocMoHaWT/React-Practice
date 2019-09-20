import React from 'react';
import {ReactComponent as Logo} from "../../../asserts/images/logo-streetcorner.svg";

export const Footer = (props) => {
    return (
        <footer>
            <a href="/"><Logo/></a>
            <div className="info">
                <p>Made by {props.author}</p>
                <p>My GIT : <a href={props.gitUrl}>My GIT account</a></p>
            </div>
        </footer>
    );
}


