import React from 'react';
import { ReactComponent as Logo } from '../../../asserts/images/logo-streetcorner.svg';

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
