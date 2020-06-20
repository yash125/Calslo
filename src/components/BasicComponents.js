import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';
import Header from './HeaderComponents';
import Footer from './FooterComponents';


        

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType : null,
            
        };
    }

    onTypeSelect(type) {
        this.setState({ selectedType: type});
    }

    renderType(type) {
        if (type != null)
            return(
                <Card>
                    <CardImg top src={type.image} alt={type.name} />
                    <CardBody>
                      <CardTitle>{type.name}</CardTitle>
                      <CardText>{type.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const basic = this.props.types.map((type) => {
            return (
                
    
              <div  className="col-12 col-md-5 m-1">
                  
                <Card key={type.id}
                  onClick={() => this.props.onClick(type.id)}>
                  <CardImg width="100%" src={type.image} alt={type.name} />
                  <CardImgOverlay>
                      <CardTitle>{type.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            
            );
        });

        return (
            
            <div className="container">
                <div className="row">
                    {basic}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderType(this.state.selectedType)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Basic;