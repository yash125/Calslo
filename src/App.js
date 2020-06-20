import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="/">CalSlo</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
