import React from 'react';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import ChatBox from '../../components/ChatBox/ChatBox';
import './Home.css';

function Home() {
    const values = ["Software Engineer @ Bankwest", "Builder", "Full Stack Developer"];

    return( 
        <div className="landing-grid">
            <div className="home-banner-text">
                <div className="banner-text">
                    <h1>Yaser Azfar</h1>
                    <AnimatedText values={values} interval={4000} typingSpeed={100} />
                    
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

                        {/* Email */}
                        <a href="mailto:yaserazfar@gmail.com" rel="noopener nonreferrer" target="_blank">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </a>                             

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
