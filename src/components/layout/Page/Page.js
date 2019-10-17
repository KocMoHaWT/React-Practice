import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageView from './PageView';

class Page extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.scrollRef = React.createRef();
    this.state = {
      author: 'Vladislav Dontsov',
      gitUrl: 'https://github.com/KocMoHaWT',
      showScrollTop: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { showScrollTop } = this.state;
    if (window.scrollY > 80) {
      if (!showScrollTop) {
        this.setState({
          showScrollTop: true
        });
      }
    } else {
      this.setState({
        showScrollTop: false
      });
    }
  };

  scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { author, gitUrl, showScrollTop } = this.state;
    const { children } = this.props;
    return (
      <PageView
        author={author}
        gitUrl={gitUrl}
        headerRef={this.headerRef}
        showScrollTop={showScrollTop}
        onScroll={this.handleScroll}
        scrollTo={this.scrollTo}
      >
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
