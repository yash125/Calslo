import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Basic from './BasicComponents';
import DishDetail from './DishdetailComponent';
import { TYPES } from '../Shared/types';
import Header from './HeaderComponents';
import Footer from './FooterComponents';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        types: TYPES,
        selectedType: null
    };
  }

  onTypeSelect(typeId) {
    this.setState({ selectedType: typeId});
  }

  render() {
    return (
      <div>
          <Header/>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">CalSlo</NavbarBrand>
          </div>
        </Navbar>
        <Basic types={this.state.types} onClick={(typeId) => this.onTypeSelect(typeId)} />
        <DishDetail type={this.state.types.filter((type) => type.id === this.state.selectedType)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;