import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Contact extends Component {
    render() {
        const progress = 66;

        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="ideas-styling">
                            <h1>PROGRESS</h1>
                            {/* <h1>• P • R • O • G • R • E • S • S •</h1> */}
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
                                <h6>
                                    6) Make me hold something in the background image
                                </h6>
 
                                <br/>
                        </div>

                        <h6> Email me any recommendations or ideas for the website 
                        </h6>
                        <a href="mailto:yaserazfar@gmail.com" rel="noopener nonreferrer" target="_blank"> 
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </a> 
                    </div>

                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;