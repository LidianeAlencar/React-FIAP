import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
         
          <Routes />

        </div>
      </Router>
    );
  }
}
// https://api.mercadolibre.com/sites/MLB/search?q=iphone#options
export default App;
