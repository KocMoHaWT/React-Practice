import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageView = ({
  author, gitUrl, headerRef, onScroll, showScrollTop, scrollTo, children
}) => {
  return (
    <div onScroll={onScroll}>
      {
        showScrollTop
          ? (
            <FontAwesomeIcon icon={faChevronUp} onClick={scrollTo} className="scroll" />
          )
          : null
      }
      <Header
        headerRef={headerRef}
      />
      {children}
      <Footer author={author} gitUrl={gitUrl} />
    </div>
  );
};

PageView.propTypes = {
  author: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  headerRef: PropTypes.objectOf(PropTypes.object).isRequired,
  onScroll: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showScrollTop: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default PageView;
