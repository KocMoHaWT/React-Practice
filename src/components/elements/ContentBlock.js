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
  className: PropTypes.string,
  children: PropTypes.any
};

ContentBlock.defaultProps = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default ContentBlock;
