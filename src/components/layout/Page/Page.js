import React, {Component} from 'react';
import {PageView} from "./PageView";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: 'Vladislav Dontsov',
            gitUrl : 'https://github.com/KocMoHaWT',

        }

    }
    render() {
        return (
            <PageView author={this.state.author} gitUrl={this.state.gitUrl}>
                {this.props.children}
            </PageView>
        )
    }
}

export default Page;