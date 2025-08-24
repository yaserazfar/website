import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Badge } from 'react-bootstrap';
import './Progress.css';

class Progress extends Component {
    render() {
        const progress = 44.4;

        return(
            <div className="landing-grid">
                <div className="content-wrapper">
                    <div className="ideas-styling">
                            <h1>PROGRESS</h1>
                            <div className="banner-text" >
                                <ProgressBar animated now={progress} label={`${progress}%`}></ProgressBar>
                                <h5>                                       
                                    <Badge bg="success">done</Badge>&nbsp; Buy domain and host portfolio website 
                                </h5>
                                <h5>
                                    <Badge bg="success">done</Badge>&nbsp; Create Landing, About, Projects and Progress pages  
                                </h5>   
                                <h5>
                                    <Badge bg="success">done</Badge>&nbsp; Add percentage bar on Progress page
                                </h5>  
                                <h5>
                                    <Badge bg="success">done</Badge>&nbsp; Add description on About page
                                </h5>
                                <h5>
                                    <Badge bg="secondary">todo</Badge>&nbsp; Update projects list
                                </h5>
                                <h5>
                                    <Badge bg="secondary">todo</Badge>&nbsp; Create ability to add research, diagrams and prototypes behind project 
                                </h5>
                                <h5>
                                    <Badge bg="secondary">todo</Badge>&nbsp; Make object I'm holding interactive
                                </h5>
                                <h5>
                                    <Badge bg="secondary">todo</Badge>&nbsp; Create a contact me feature
                                </h5>
                                <h5>
                                    <Badge bg="secondary">todo</Badge>&nbsp; Bug fixes &#x1f92b;
                                </h5>
                                <br/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progress;
