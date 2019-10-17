import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../asserts/images/logo-streetcorner.svg';

const Header = ({ headerRef }) => {
  return (

    <header ref={headerRef}>
      <div className="container">
        <a href="/">
          <Logo />
        </a>
        <nav>
          <ul>
            <li><a href="#types">types</a></li>
            <li><a href="#description">description</a></li>
            <li><a href="$form">form</a></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

Header.propTypes = {
  headerRef: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Header;
