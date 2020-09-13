import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="aboutMe-styling">
                                <h1>ABOUT</h1>
                            <div className="banner-text">
                                <p>
                                    Third year Software Engineering student and engineering tutor [Engineering and Society (ENGEN170), Engineering and Business (ENGEN270)] 
                                    at the <a href="https://www.waikato.ac.nz/study/subjects/software-engineering" target="_blank"> University of Waikato </a>. 
                                </p>
                                <p>
                                    Over the past two years I have had the opportunity to complete two software engineering internships; 
                                    the first at 
                                    <a href="https://www.nyriad.com/" target="_blank"> Nyriad </a> 
                                    which led to a developer role within the company and the latest at 
                                    <a href="https://www.codelingo.io/" target="_blank"> CodeLingo</a>. 
                                    Working at tech start-ups allowed me to experience a variety of tasks and challenges that occur in all areas of 
                                    software companies and have given me great insight to the industry. As I advance my software knowledge over time, 
                                    I am eager to apply it to build software and look forward to contributing to a project that would 
                                    make a genuine difference in the world.
                                </p>
                            </div>
                                <h6> React | JavaScript | Golang | Java | C# | Python | C++ | HTML | CSS | SQL | Git | Jenkins </h6>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;