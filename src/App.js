import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import DishDetail from './components/DishdetailComponent';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
