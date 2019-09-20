import React, {Component} from 'react';
import {ReactComponent as Arrow} from "../../../../../asserts/images/Group 11.svg";

class FormBlock extends Component {
    render() {
        return (
            <>
                <div className="contact-text">
                    <h1>{this.state.form__h1}</h1>
                    <p>{this.state.form__p}</p>
                    <a href="#">READ Disclaimer <Arrow/></a>
                </div>
                <form>
                    <h1>Connect with us</h1>
                    <input type="text" name="first Name" placeholder="First name"/>
                    <div className="line"></div>
                    <input type="text" name="last name" placeholder="Last name"/>
                    <div className="line"></div>
                    <input type="email" name="email" placeholder="E-mail"/>
                    <div className="line"></div>
                    <input type="text" name="phone number" placeholder="Phone number"/>
                    <div className="line"></div>
                    <input type="text" name="comments" placeholder="Comments"/>
                    <div className="line"></div>
                    <input type="text"/>
                </form>
            </>
        );
    }
}

export default FormBlock;