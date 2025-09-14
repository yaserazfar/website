import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="about-page-background">
                <div className="about-content-container">
                    <div className="content-wrapper">
                        <div className="aboutMe-styling">
                                <h1>ABOUT ME</h1>
                            <div className="banner-text">
                                <p>
                                    Hey, I’m Yaser 👋 — a software engineer who loves solving problems, building products, and learning something new every day.
                                </p>
                                <p>
                                    Right now, I work at Bankwest, helping build the bank’s onboarding platform. 
                                    I started here as a Technology Graduate, and after rotations in analytics, open banking and payments, 
                                    I am now working as a full-stack developer across an Angular TypeScript frontend and C# .NET backend.
                                </p>
                                <p>
                                    Before jumping into the world of banking, I studied Software Engineering at the University of Waikato, graduating with First Class Honours. 
                                    My honours project focused on making orchard data more useful — I partnered with Zespri, Robotics Plus, and Rocos.io to build a React Native mobile app 
                                    that helped growers visualise and understand their data. Along the way, I also worked as a tutor, which taught me that explaining concepts is one of 
                                    the best ways to sharpen your own.     
                                </p>
                                <p>
                                    I've also interned at a few start-ups:
                                </p>
                                <ul>
                                    <li>21e8 — blockchain, networking, high-performance C++</li>
                                    <li>CodeLingo — github plugin, Go backend development</li>
                                    <li>Nyriad — GPU-driven storage, microservices, React.js</li>
                                </ul>
                                <p>
                                    Outside of code, you’ll usually find me at the gym, on a basketball court or tinkering with side projects.
                                </p>
                                <p style={{ marginBottom: 0 }}>
                                    At the core, I’m driven by curiosity and a belief that software is most meaningful when it makes life a little better for people.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
