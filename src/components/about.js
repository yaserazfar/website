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
                                    Final Year Software Engineering Student and Tutor for
                                    <a href="https://papers.waikato.ac.nz/papers/2021/ENGEN170" target="_blank" > Engineering and Society </a> 
                                    and
                                    <a href="https://papers.waikato.ac.nz/papers/2021/ENGEN270" target="_blank"> Engineering and Business </a>
                                    papers  
                                    at the 
                                    <a href="https://www.waikato.ac.nz/study/subjects/software-engineering" target="_blank"> University of Waikato </a>. 

                                    <br/><br/>

                                    Currently researching into capturing orchard data then processing and visualising it in the best manner for clients.
                                    Then designing and developing a tool to enable useful data visualisation for orchards. - Working with Zespri, Robotics Plus and Rocos.io 

                                    <br/><br/>

                                    Over the past three years I have had the opportunity to complete software engineering internships at these following companies: 
                                    
                                    <li><a href="https://www.21e8.nz" target="_blank"> 21e8</a> - blockchain, networking, packet processing, taskflow, c++</li>
                                    <li><a href="https://www.codelingo.io/" target="_blank"> CodeLingo </a> - SaaS: golang, backend, bug fixes</li>
                                    <li><a href="https://www.nyriad.com/" target="_blank"> Nyriad </a> - PaaS team: c++, cuda, golang, microservice breakout | frontend team: react js, bash </li>

                                    <br></br>

                                    Working at tech start-ups has allowed me to experience a variety of tasks and challenges that occur in all areas of 
                                    software companies and have given me great insight to the industry. As I advance my software knowledge over time, 
                                    I am eager to apply it to build software and look forward to contributing to a project that would 
                                    make a genuine difference in the world.
                                </p>
                            </div>
                                <h6> React | JavaScript | Golang | Java | C# | C++ | HTML | CSS | SQL | Git | Jenkins | Agile </h6>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;