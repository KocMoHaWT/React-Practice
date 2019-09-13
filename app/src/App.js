import React from "react";
import ContentBlock from "./components/ContentBlock";
import Header from "./components/layout/header";
import ListBlock from "./components/ListBlock";
import Item from "./components/Item";
import Footer from "./components/layout/footer";
import loading from "./images/loading.jpg";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner__h1: 'Street Corner Ventures\n' +
                'Qualified Opportunity Zone Funds',
            banner__p: 'Street Corner Ventures Qualified Opportunity Funds are a portfolio of qualified opportunity\n' +
                '                            zone funds that achieve attractive risk-adjusted financial returns while making a positive\n' +
                '                            impact.',
            types__title: 'IRS: Opportunity Zones Frequently Asked Questions',
            types__text: 'The IRS has published a list of frequently asked questions regarding\n' +
                '                                opportunity zones including: What is an Opportunity Zones; What is a Qualified Opportunity\n' +
                '                                Fund; How Opportunity Zones Spur Economic Development; and much more.',
            description__h1: 'The Street Corner\n' +
                '                            Investment Strategy',
            description__p: 'The Street Corner Ventures investment strategy is focused on real investments in major urban\n' +
                '                            cities throughout the country. Street Corner Ventures utilizes a defined criteria for selecting\n' +
                '                            investments in emerging urban centers that stimulate a dense ecosystem of commercial, mixed use,\n' +
                '                            and residential development transforming neighborhoods and providing investors with positive\n' +
                '                            returns.',
            form__h1: 'We’ll\n' +
                '                                contact you',
            form__p: 'Complete the simple form below and one of our experts will reach out to you shortly\n' +
                '                                to answer your questions.',
            loading: true

        };
    }
    showImage = () => {
        this.setState({loading: false})
    }

    alertImage = () => {
        setTimeout(this.showImage,2000)
    }


    renderBanner = () => {
        return(
        <ContentBlock
            className='banner'
        >
            <img src={loading} alt="load"
                 onLoad={this.alertImage}
                 className={this.state.loading ?  'loadImage': 'loadImage hidden'}
            />
            <Header/>
            <div className="banner-info">
                <h1>{this.state.banner__h1}</h1>
                <p>{this.state.banner__p}</p>
                <a className="button" href="#">GET STARTED!</a>
            </div>
            <div className="lines">
                <div className="oval"></div>
                <div className="line"></div>
            </div>
        </ContentBlock>
        )
    }

    renderTypes = () => {
        return (
            <ContentBlock
                className='types'
                id='types'
            >
                <Item
                number='1'
                title={this.state.types__title}
                text={this.state.types__text}
                />
                <Item
                number='2'
                title={this.state.types__title}
                text={this.state.types__text}
                />
                <Item
                number='3'
                title={this.state.types__title}
                text={this.state.types__text}
                />

            </ContentBlock>
        )
    }

    renderDescription = () => {
        return(
            <ContentBlock
                className='description'
                id='description'
                heading={this.state.description__h1}
                paragraph={this.state.description__p}
            />
            )
    }

    renderTasks = () => {
        return (
            <ContentBlock
                className='form'
                id='form'
            >
                <ListBlock biorhaphy={this.state.biography}/>
            </ContentBlock>
        )
    }

    render() {
        return (
            <>
                {this.renderBanner()}
                {this.renderTypes()}
                {this.renderDescription()}
                {this.renderTasks()}
                <Footer/>
            </>
        )
    }
}

export default App;