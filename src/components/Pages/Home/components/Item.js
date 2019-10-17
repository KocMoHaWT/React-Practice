import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../../../asserts/images/Group 11.svg';

class Item extends Component {
  render() {
    const { number, title, text } = this.props;
    return (
      <div className="types--item">
        <div className="number">{number}</div>
        <div className="title">
          {title}
        </div>
        <div className="line" />
        <div className="text">
          {text}
        </div>
        <button
          type="button"
          className="button"
        >
          READ MORE
          <Arrow />
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

Item.defaultProps = {
  number: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Item;
