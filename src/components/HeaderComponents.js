import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/logo.jpg" height="100" width="100"
                alt="CalSlo"/>
                
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
            
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/basic'><span className="fa fa-list fa-lg"></span> Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                </Nav>
                </Collapse>
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