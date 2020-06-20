import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/logo.jpg" height="100" width="100"
                alt="CalSlo"/>
                </NavbarBrand>
                <Nav navbar>
            
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                </Nav>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>CalSlo</h1>
                       <p>The best place for booking a slot for all the meetings or the gatherings with CalSlo</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;