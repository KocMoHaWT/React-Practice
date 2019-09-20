import React, {Component} from 'react';
import {HomeView} from "./HomeView";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePageText : {
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
            },
            loading: true

        };
    }

    showImage = () => {
        this.setState({loading: false})
    }

    alertImage = () => {
        setTimeout(this.showImage,2000)
    }


    render() {
        return (
            <HomeView
                  alertImage={this.alertImage()}
                  homePageText={this.state.homePageText}
                  loading={this.state.loading}
            >
            </HomeView>
        )
    }
}

export default Home;