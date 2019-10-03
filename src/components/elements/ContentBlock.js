import React from 'react';
import PropTypes from 'prop-types';

const ContentBlock = ({
  className, children
}) => {
  return (
    <div className={className}>
      <div className="container">
        {children}
      </div>
    </div>
  );
};

ContentBlock.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ContentBlock;
