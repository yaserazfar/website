import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text2">
                            <h1>About me</h1>

                            <hr/>

                            <p>
                            After gaining experience of working in a start-up, at Nyriad, I am really intrigued by opportunities of having a positive input in software projects. I am currently in my second year of university studying software engineering, where I code mostly in Java and C#, while also learning SQL, Python and have gained experience in project management and worked in multiple group projects.<br></br><br></br>

                            In my previous software engineering job I worked in a Platform as a Service team, where I was responsible for transferring a mono-repository into a multi-repository for the micro-service architecture of the platform. Following that I was transferred to the Web Development team, where I worked on various bugs for the team, while also creating tests for the CI pipeline of the website.<br></br><br></br>

                            Overall, I am looking to explore and go deeper into the many fields of software development to increase my knowledge to be able to have an impact in the world.
                            </p>

                            <p> Java | C# | Python | C++ | React | JavaScript | SQL | Git | Jenkins </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;