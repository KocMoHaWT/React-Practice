import React from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../../elements/ContentBlock';
import Loading from '../../../asserts/images/loading.jpg';

import Item from './components/Item';

import ListBlockView from './components/ListBlockView';

const HomeView = (props) => {
  const {
    homePageText, alertImage, loading, onClick, changeObj, deleteLast, addToList, jsSort, selectionSort, list
  } = props;

  return (
    <div
      className="homePage"
      id="item"
    >
      <ContentBlock
        className="banner"
        id="banner"
      >
        <img
          src={Loading}
          alt="load"
          onLoad={alertImage} // test this
          className={loading ? 'loadImage' : 'loadImage hidden'}
        />

        <div className="banner-info">
          <h1>{homePageText.bannerH1}</h1>
          <p>{homePageText.bannerP}</p>
          <button
            type="button"
            className="button"
          >
            GET STARTED!
          </button>
        </div>
        <div className="lines">
          <div className="oval" />
          <div className="line" />
        </div>
      </ContentBlock>
      <ContentBlock
        className="types"
        id="types"
      >
        <Item
          number="1"
          title={homePageText.typesTitle}
          text={homePageText.typesText}
        />
        <Item
          number="2"
          title={homePageText.typesTitle}
          text={homePageText.typesText}
        />
        <Item
          number="3"
          title={homePageText.typesTitle}
          text={homePageText.typesText}
        />
      </ContentBlock>
      <ContentBlock
        className="description"
        id="description"
      >
        <h1>{homePageText.descriptionH1}</h1>
        <p>{homePageText.descriptionP}</p>
      </ContentBlock>
      <ContentBlock
        className="form"
        id="form"
      >
        <ListBlockView
          onClick={onClick}
          changeObj={changeObj}
          deleteLast={deleteLast}
          addToList={addToList}
          jsSort={jsSort}
          selectionSort={selectionSort}
          list={list}
        />
      </ContentBlock>
    </div>
  );
};

HomeView.propTypes = {
  homePageText: PropTypes.objectOf(PropTypes.string).isRequired,
  alertImage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  changeObj: PropTypes.func.isRequired,
  deleteLast: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired,
  jsSort: PropTypes.func.isRequired,
  selectionSort: PropTypes.func.isRequired,
  list: PropTypes.node.isRequired,
};


export default HomeView;
