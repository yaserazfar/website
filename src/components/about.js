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
                                    Technical Graduate at 
                                    <a href="https://www.bankwest.com.au/" target="_blank"> Bankwest </a>
                                    currently doing a rotation as a Software Engineer in Open Banking. 
                                    Previously did a rotation as an Insight Analyst in Decision Support. 
 
                                    <br/><br/>
                                    First Class Honours Software Engineering Graduate from the
                                    <a href="https://www.waikato.ac.nz/study/subjects/software-engineering" target="_blank"> University of Waikato</a>.
                                    At University I was also a Tutor for
                                    <a href="https://papers.waikato.ac.nz/papers/2021/ENGEN170" target="_blank" > Engineering and Society </a> 
                                    and
                                    <a href="https://papers.waikato.ac.nz/papers/2021/ENGEN270" target="_blank"> Engineering and Business </a>
                                    papers.  

                                    For my honours project I researched into capturing orchard data, processing and visualising it in the best manner for clients.
                                    This lead to designing and developing a React Native mobile application to enable useful data visualisation for orchards. The project was done alongside with Zespri, Robotics Plus and Rocos.io 

                                    <br/><br/>

                                    Over my collegiate years I  had the opportunity to complete software engineering internships at these following companies: 
                                    
                                    <li><a href="https://www.21e8.nz" target="_blank"> 21e8</a> - blockchain, networking, packet processing, taskflow, c++</li>
                                    <li><a href="https://www.codelingo.io/" target="_blank"> CodeLingo </a> - golang, backend, bug fixes</li>
                                    <li><a href="https://www.nyriad.com/" target="_blank"> Nyriad </a> - c++, cuda, golang, microservice breakout, react js, bash </li>

                                    <br></br>

                                    Working at tech start-ups has allowed me to experience a variety of tasks and challenges that occur in all areas of 
                                    software companies and have given me great insight to the industry. As I advance my software knowledge over time, 
                                    I am eager to apply it to build software and look forward to contributing to a project that would 
                                    make a genuine difference in the world.
                                </p>
                            </div>
                            <div className="banner-text">
                                <h6> React | JavaScript | SQL | Java | C#.NET | C++ | HTML | CSS | Git | Jenkins | Agile </h6>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;