import React, { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return(
            <Form>

             <h2>Give me reccomendations on what to learn about, or leave feedback for this website! </h2> 
                    <FormGroup controlId="formBasicName">
                        <FormLabel>Name: </FormLabel>
                        <FormControl type="name" placeholder="Enter full name" />
                    </FormGroup>

                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email address: </FormLabel>
                        <FormControl type="email" placeholder="Enter email" />
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
                        <FormLabel>Idea / Recommendation: </FormLabel>
                        <FormControl as="textarea" rows="3"/>
                    </FormGroup>

                    <Button variant="primary" type="submit"> Submit </Button>

                </Form>

        )
    }
}

export default Contact;