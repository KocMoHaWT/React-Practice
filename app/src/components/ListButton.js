import React from 'react';

function ListButton(props) {
    return (
        <button onClick={props.action}>{props.text}</button>
    )

}

export default ListButton;