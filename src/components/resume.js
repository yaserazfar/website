import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text2">
                            <h1>Please email <a href="yaserazfar@gmail.com"></a> to request for his resume.</h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;