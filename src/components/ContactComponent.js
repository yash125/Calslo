import React,{Component} from 'react';
import {Button, Form,Label,Input,Col, FormGroup } from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state={
            Eventname: '',
            Location: '',
            Description: '',
            Eventlink: '',
            agree: false,
            Contact: 'Tel'

        };
    }
    render(){

        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h1>Book a slot?</h1>
                    </div>
                    
                   
                   
                </div>
                <div className="row row-content">
                    
                    <div className="col-12 col-md-9">
                        <Form>
                            <FormGroup row>
                            <Label htmlFor="Eventname" md={2}>Event Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="Eventname" name="Eventname"
                                        placeholder="Event Name"
                                        value={this.state.Eventname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="Location" md={2}>Location</Label>
                                <Col md={10}>
                                    <Input type="text" id="Location" name="Location"
                                        placeholder="Location"
                                        value={this.state.Locaction}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="Description" md={2}>Description</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="Description" name="Description"
                                        rows="12"
                                        value={this.state.Description}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="Eventlink" md={2}>Event Link</Label>
                                <Col md={10}>
                                    <Input type="link" id="Eventlink" name="link"
                                        placeholder="Meeting Link"
                                        value={this.state.Eventlink}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="contact" md={2}>Contact</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }

    }
    

export default Contact;