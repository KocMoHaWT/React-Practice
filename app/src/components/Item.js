import React, {Component} from 'react';
import {ReactComponent as Arrow} from "../images/Group 11.svg";

class Item extends Component {
    render() {
        return (
            <div className="types--item">
                <div className="number">{this.props.number}</div>
                <div className="title">{this.props.title}
                </div>
                <div className="line"></div>
                <div className="text">{this.props.text}
                </div>
                <a href="#">READ MORE <Arrow/></a>
            </div>
        );
    }
}

export default Item;