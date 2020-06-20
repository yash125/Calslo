import React,{Component} from 'react';
import {Button, Form,Label,Input,Col, FormGroup, FormFeedback } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state={
            Eventname: '',
            Location: '',
            Description: '',
            Eventlink: '',
            agree: false,
            Contact: 'Tel',
            startDate: new Date(),
            touched: {
                Eventname: false,
                Location: false,
                Description: false,
                Contact: false
            }

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
    
        this.setState({
          [name]: value
        });
        
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  handleBlur=(field)=>(evt)=>{
      this.setState({
          touched: {...this.state.touched, [field]:true}
      });
  }
  validate(Eventname,Location,Description,Eventlink){
      const errors={
        Eventname: '',
        Location: '',
        Description: '',
        Contact: ''
      };

      if(this.state.touched.Eventname && Eventname.length<2)
      errors.Eventname = 'Eventname should be greater than 1 character.';
      
      if(this.state.touched.Description && Description.length<3)
      errors.Description= 'Description should be valid';
      else if(this.state.touched.Description && Description.length>100)
      errors.Description='Description should be under range';

      const reg= /^\d+$/;
      if(this.state.touched.Contact && !reg.test(Contact))
      errors.Contact='Contact number should contain only numbers';


      return errors;


  }
    render(){

        const errors=this.validate(this.state.Eventname, this.state.Description, this.state.Contact);
        

        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h1>Book a slot?</h1>
                    </div>
                    
                   
                   
                </div>
                <div className="row row-content">
                    
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                            <Label htmlFor="Eventname" md={2}>Event Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="Eventname" name="Eventname"
                                        placeholder="Event Name"
                                        value={this.state.Eventname}
                                        valid={errors.Eventname === ''}
                                        invalid={errors.Eventname !== ''}
                                        onBlur={this.handleBlur('Eventname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.Eventname}</FormFeedback>
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
                                        valid={errors.Description=== ''}
                                        invalid={errors.Description !== ''}
                                        onBlur={this.handleBlur('Description')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.Description}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="Eventlink" md={2}>Event Link</Label>
                                <Col md={10}>
                                    <Input type="text" id="Eventlink" name="Eventlink"
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
                                        valid={errors.Contact === ''}
                                        invalid={errors.Contact !== ''}
                                        onBlur={this.handleBlur('Contact')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.Contact}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="startDate" md={2}>Select Date</Label>
                                <Col md={10}>
                                    
                                <DatePicker
                                 selected={ this.state.startDate }
                                onChange={ this.handleChange }
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
          />
                             <button className="btn btn-primary">Show Date</button>
                             </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
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