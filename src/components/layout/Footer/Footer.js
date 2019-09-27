import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../asserts/images/logo-streetcorner.svg';

const Footer = ({ author, gitUrl }) => {
  return (
    <footer>
      <a href="/">
        <Logo />
      </a>
      <div className="info">
        <p>
          Made by
          {author}
        </p>
        <p>
          My GIT :
          <a href={gitUrl}>My GIT account</a>
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.string,
  gitUrl: PropTypes.string
};

Footer.defaultProps = {
  author: PropTypes.string,
  gitUrl: PropTypes.string
};

export default Footer;
