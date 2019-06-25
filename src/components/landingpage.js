import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'


class Landing extends Component {
    render() {
        return( 
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">

                    <Cell col={12}>
                            <img
                            src="https://i.imgur.com/99DOEai.png"
                            alt="avatar"
                            className="avatar-img" 
                            />        
                         <div className="banner-text">
                            <h1>Yaser Azfar</h1>
                            <h2>Software Engineering Student</h2>
                            
                            <hr/>

                            <p> REACH ME THROUGH ANY OF MY SOCIALS BELOW! </p>
                            
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://linkedin.com/in/yaser-azfar" rel="noopener nonreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/yaserazfar" rel="noopener nonreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                                {/* Twitter */}
                                <a href="https://twitter.com/YaserAzfar" rel="noopener nonreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/YaserAzfar" rel="noopener nonreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/therealyaser/" rel="noopener nonreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                            </div>
                         </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;