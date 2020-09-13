import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Progress extends Component {
    render() {
        const progress = 71;

        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="ideas-styling">
                                <h1>PROGRESS</h1>
                                <div className="banner-text">
                                    <ProgressBar animated now={progress} label={`${progress}%`}></ProgressBar>
                                    <h5>
                                        <br/>
                                        1) Make a portfolio website 
                                    </h5>
                                    <h5>
                                        2) Landing, About, Work and Progress pages  
                                    </h5>   
                                    <h5>
                                        3) Add percentage bar on Progress page
                                    </h5>  
                                    <h5>
                                        4) Add description on About page
                                    </h5>
                                    <h6>
                                        5) Update projects list, add all Uni projects
                                    </h6>
                                    <h5>
                                        6) Make me hold something in the background image
                                    </h5>
                                    <h6>
                                        7) Make a contact me page
                                    </h6>
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