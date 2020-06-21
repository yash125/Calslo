import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Basic from './BasicComponents';
import DishDetail from './DishdetailComponent';
import { TYPES } from '../Shared/types';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        types: TYPES,
    };
  }



  render() {

    const HomePage = () => {
        return(

            <Home/>
        );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/basic' component={() => <Basic types={this.state.types} />} />
              <Route exact path='/contactus' component={Contact}  />
              <Redirect to="/home" />
          </Switch>
        
        <Footer/>
      </div>
    );
  }
}

export default Main;