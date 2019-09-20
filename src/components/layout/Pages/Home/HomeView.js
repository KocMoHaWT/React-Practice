import React from 'react';
import ContentBlock from "../../../elements/ContentBlock";
import loading from "../../../../asserts/images/loading.jpg";
import Header from "../../Header/header";
import Item from "./components/Item";
import ListBlock from "./components/ListBlock/ListBlock";

export const HomeView = (props) => {
    const pageInfo = props.homePageText;
    return (
        <>
            <ContentBlock
                className='banner'
            >
                <img src={loading} alt="load"
                     onLoad={props.alertImage}  // test this
                     className={props.loading ?  'loadImage': 'loadImage hidden'}
                />
                <Header/>
                <div className="banner-info">
                    <h1>{pageInfo.banner__h1}</h1>
                    <p>{pageInfo.banner__p}</p>
                    <a className="button" href="#">GET STARTED!</a>
                </div>
                <div className="lines">
                    <div className="oval"></div>
                    <div className="line"></div>
                </div>
            </ContentBlock>
            <ContentBlock
                className='types'
                id='types'
            >
                <Item
                    number='1'
                    title={pageInfo.types__title}
                    text={pageInfo.types__text}
                />
                <Item
                    number='2'
                    title={pageInfo.types__title}
                    text={pageInfo.types__text}
                />
                <Item
                    number='3'
                    title={pageInfo.types__title}
                    text={pageInfo.types__text}
                />

            </ContentBlock>
            <ContentBlock
                className='description'
                id='description'
                heading={pageInfo.description__h1}
                paragraph={pageInfo.description__p}
            />
            <ContentBlock
                className='form'
                id='form'
            >
                <ListBlock/>
            </ContentBlock>
        </>
    )
}