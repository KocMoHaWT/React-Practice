import React from 'react';

const withList = (listOfItems, Component) => {
  const renderList = () => {
    listOfItems.map((obj) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <li
        key={obj.id}
        draggable
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        onClick={this.onClick}
      >
        {obj.id}
        . Name :
        {obj.name}
        , Living place :
        {obj.address.city}
      </li>
    ));
  };
  return (
    // eslint-disable-next-line react/no-this-in-sfc,react/jsx-props-no-spreading
    <Component {...this.props}>
      <ul id="list">
        {renderList()}
      </ul>
    </Component>
  );
};

export default withList;
