import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="aboutMe-styling">
                                <h1>-A-B-O-U-T-</h1>
                            <div className="banner-text">
                                <p>
                                    TODO
                                </p>

                            </div>
                                <h6> Golang | Java | C# | Python | C++ | React | JavaScript | HTML | CSS | SQL | Git | Jenkins </h6>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;