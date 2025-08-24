import React, { Component } from 'react';
import { useDencrypt } from "use-dencrypt-effect";
import './Home.css';

class Home extends Component {
    render() {
        const values = ["Software Engineer @ Bankwest", "Builder", "Full Stack Developer"];

        const CrypticText = () => {
            const { result, dencrypt } = useDencrypt();
            React.useEffect(() => {
              dencrypt(values[0]);
              
              let i = 1; 
              const action = setInterval(() => {
                dencrypt(values[i]);
                i = i === values.length - 1 ? 0 : i + 1;
              }, 4000);
              
              return () => clearInterval(action);
            }, []);
            return <h2>{result}</h2>;
        };
        

        return( 
            <div className="landing-grid">
                <div className="home-banner-text">
                    <div className="banner-text">
                        <h1>Yaser Azfar</h1>
                        <CrypticText />                       
                        
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
        )
    }
}

export default Home;
