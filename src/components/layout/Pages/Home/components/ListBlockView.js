import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../elements/Button';

const ListBlockView = ({
  jsSort, selectionSort, deleteLast, addToList, changeObj, children
}) => {
  return (
    <>
      <ul id="list">
        {children}
      </ul>
      <div className="button-container">
        <Button text="Js Sort" action={jsSort} />
        <Button text="Own Sort" action={selectionSort} />
        <Button text="Delete last" action={deleteLast} />
      </div>
      <div className="changeForm">
        <label htmlFor="name">
          Name someone who you want to add
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="city">
          Where is this person living
          <input type="text" name="city" id="city" />
        </label>
        <Button text="Add New" action={addToList} />
      </div>
      <div className="changeForm">
        <label htmlFor="place">
          Pick someone id(1,2...)
          <input type="text" name="place" placeholder="" id="place" required />
        </label>
        <label htmlFor="field">
          Pick which field to change?(name or city)
          <input type="text" name="field" id="field" required />
        </label>
        <label htmlFor="value">
          Write how to change
          <input type="text" name="value" id="value" required />
        </label>
        <Button text="change object" action={changeObj} />
      </div>
    </>
  );
};

ListBlockView.propTypes = {
  jsSort: PropTypes.func,
  selectionSort: PropTypes.func,
  deleteLast: PropTypes.func,
  addToList: PropTypes.func,
  changeObj: PropTypes.func,
  children: PropTypes.node
};

ListBlockView.defaultProps = {
  jsSort: PropTypes.func,
  selectionSort: PropTypes.func,
  deleteLast: PropTypes.func,
  addToList: PropTypes.func,
  changeObj: PropTypes.func,
  children: PropTypes.node
};

export default ListBlockView;
