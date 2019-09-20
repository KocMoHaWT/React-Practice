import React from 'react';
import {Footer} from "../Footer/Footer";

export const PageView = (props) => {
    return(
        <>
        {props.children}
        <Footer author={props.author} gitUrl={props.gitUrl}/>
        </>
    )
}