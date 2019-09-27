import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageView from './PageView';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Vladislav Dontsov',
      gitUrl: 'https://github.com/KocMoHaWT',

    };
  }

  render() {
    const { author, gitUrl } = this.state;
    const { children } = this.props;
    return (
      <PageView author={author} gitUrl={gitUrl}>
        {children}
      </PageView>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node
};

Page.defaultProps = {
  children: PropTypes.node
};

export default Page;
