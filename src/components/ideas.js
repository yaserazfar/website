import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import { Form, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap';

class Contact extends Component {
    // constructor(){
    //     super();
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);

    //     //const name = data.get(name);
    //     // const email = data.get(email);
    //     // const text = data.get(text);

    //     // data.set(name, email, text);
        
    //     fetch('/api/form-submit-url', {
    //       method: 'POST',
    //       body: data,
    //     });
    //   }

    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="ideas-styling">
                            <h1>Under Construction</h1>
                            <div className="banner-text">
                                <p>
                                    1) Add Landing page, About Me page and Projects page <span>&#10003;</span> <br /> <br /> 

                                    2) Add links to social media pages <span>&#10003;</span> <br /> <br />

                                    3) Add projects and project links from github <span>&#10003;</span> <br /> <br />
                                    
                                    4) Improve user interface and design <span>&#10003;</span> <br /> <br />

                                    5) Create an Ideas page to show progress on website <span>&#10003;</span> <br /> <br />

                                    6) Start hosting website <span>&#10003;</span> <br /> <br />

                                    <strong >To do: <br /> <br /></strong>

                                    7) Create a blog/article section <br /> <br />

                                    8) Create a form for recommendations <br /> <br />
                                    
                                    9) Get a summer internship <br /> <br />

                                    10) Do more projects <br /> <br />

                                    11) Make the world better <br /> <br />

                                </p>


                        </div>

                        <h6> Email me any recommendations or ideas for the website 
                        </h6>
                        <a href="mailto:yaserazfar@gmail.com" rel="noopener nonreferrer" target="_blank"> 
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </a> 
                    </div>

                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;