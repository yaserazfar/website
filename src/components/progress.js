import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Badge } from 'react-bootstrap';

class Progress extends Component {
    render() {
        const progress = 44.4;

        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="ideas-styling">
                                <h1>PROGRESS</h1>
                                <div className="banner-text" >
                                    <ProgressBar animated now={progress} label={`${progress}%`}></ProgressBar>
                                    <h5>                                       
                                        <Badge>done</Badge>&nbsp; Buy domain and host portfolio website 
                                    </h5>
                                    <h5>
                                        <Badge>done</Badge>&nbsp; Create Landing, About, Projects and Progress pages  
                                    </h5>   
                                    <h5>
                                        <Badge>done</Badge>&nbsp; Add percentage bar on Progress page
                                    </h5>  
                                    <h5>
                                        <Badge>done</Badge>&nbsp; Add description on About page
                                    </h5>
                                    <h5>
                                        <Badge style={{color: 'white', backgroundColor: '#284166'}}>todo</Badge>&nbsp; Update projects list
                                    </h5>
                                    <h5>
                                        <Badge style={{color: 'white', backgroundColor: '#284166'}}>todo</Badge>&nbsp; Create ability to add research, diagrams and prototypes behind project 
                                    </h5>
                                    <h5>
                                        <Badge style={{color: 'white', backgroundColor: '#284166'}}>todo</Badge>&nbsp; Make object I'm holding interactive
                                    </h5>
                                    <h5>
                                        <Badge style={{color: 'white', backgroundColor: '#284166'}}>todo</Badge>&nbsp; Create a contact me feature
                                    </h5>
                                    <h5>
                                        <Badge style={{color: 'white', backgroundColor: '#284166'}}>todo</Badge>&nbsp; Bug fixes &#x1f92b;
                                    </h5>
                                    <br/>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Progress;