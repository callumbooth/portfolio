import React, { Component } from 'react';

import Header from '../components/header';
import Nav from '../components/sidebar';


class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPreview: false,
            selectedProject: {}
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e, name, url) {

        const currentState = this.state.showPreview;
        this.setState({ 
            showPreview: !currentState,
            selectedProject: {
                name: name,
                url: url
            }
        });
    }
    
    render() {
        const showPreview = this.state.showPreview ? <div className="preview-container">
            <Container data={this.state.selectedProject} />
        </div> : null;
        return (
            <div className="content">
                <div className="project-cards">
                    <div className="project-card" onClick={(e) => this.handleClick(e, 'Glass', 'glass')}>
                        Glass
                    </div>
                    <div className="project-card" onClick={(e) => this.handleClick(e, 'Banana', 'banana')}>
                        Banana
                    </div>
                    <div className="project-card" onClick={(e) => this.handleClick(e, 'Paper', 'paper')}>
                        Paper
                    </div>
                </div>
                {showPreview}
            </div>
        );    
    }
}

export default Work;