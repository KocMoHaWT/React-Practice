import React from 'react';

function Button(props) {
    return (
        <button onClick={props.action}>{props.text}</button>
    )

}

export default Button;