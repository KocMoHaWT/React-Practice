import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../../../asserts/images/Group 11.svg';

class FormBlock extends Component {
  render() {
    const { formH1, formP } = this.props;
    return (
      <div>
        <div className="contact-text">
          <h1>{formH1}</h1>
          <p>{formP}</p>
          <button type="button">
            READ Disclaimer
            <Arrow />
          </button>
        </div>
        <form>
          <h1>Connect with us</h1>
          <input type="text" name="first Name" placeholder="First name" />
          <div className="line" />
          <input type="text" name="last name" placeholder="Last name" />
          <div className="line" />
          <input type="email" name="email" placeholder="E-mail" />
          <div className="line" />
          <input type="text" name="phone number" placeholder="Phone number" />
          <div className="line" />
          <input type="text" name="comments" placeholder="Comments" />
          <div className="line" />
          <input type="text" />
        </form>
      </div>
    );
  }
}

FormBlock.propTypes = {
  formH1: PropTypes.string,
  formP: PropTypes.string
};

FormBlock.defaultProps = {
  formH1: PropTypes.string,
  formP: PropTypes.string
};

export default FormBlock;
