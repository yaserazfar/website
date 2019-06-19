import React, { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap';

class Contact extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        //const name = data.get(name);
        // const email = data.get(email);
        // const text = data.get(text);

        // data.set(name, email, text);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
      }

    render() {
        return(

            <div className="form-background">

                <Form className="form-page">

                <h2>Give me reccomendations on what to learn or give feedback for this website! </h2> 

                        <FormGroup controlId="formBasicName">
                            <FormLabel>Name: </FormLabel>
                            <FormControl type="name" placeholder="Enter full name" />
                        </FormGroup>

                        <FormGroup controlId="formBasicEmail">
                            <FormLabel>Email address: </FormLabel>
                            <FormControl type="email" required placeholder="Enter email" />
                        </FormGroup>

                        <FormGroup controlId="formControlSelect">
                            <FormLabel> Category: </FormLabel>
                            <FormControl as="select">
                                <option>Software</option>
                                <option>Book</option>
                                <option>Person</option>
                                <option>Other</option>
                                <option>Feedback</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="formControlTextArea">
                            <FormLabel>Recommendation / Feedback: </FormLabel>
                            <FormControl type="text" as="textarea" required rows="3"/>
                        </FormGroup>

                        <Button variant="primary" type="submit"> Submit </Button>

                    </Form>
            </div>

        )
    }
}

export default Contact;