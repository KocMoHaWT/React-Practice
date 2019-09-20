import React, {Component} from 'react';

class ContentBlock extends Component {

    render() {
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className="container">
                    {this.props.heading && <h1>{this.props.heading}</h1>}
                    {this.props.paragraph && <p>{this.props.paragraph}</p>}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ContentBlock;