import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PageView = ({ author, gitUrl, children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer author={author} gitUrl={gitUrl} />
    </div>
  );
};

PageView.propTypes = {
  author: PropTypes.string,
  gitUrl: PropTypes.string,
  children: PropTypes.node
};

PageView.defaultProps = {
  author: PropTypes.string,
  gitUrl: PropTypes.string,
  children: PropTypes.node
};

export default PageView;
