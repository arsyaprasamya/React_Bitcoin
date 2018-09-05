import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Bitcoin from './component/Bitcoin';
import BitRupiah from './component/BitRupiah';
import RupiahBit from './component/RupiahBit';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path="/" component={Bitcoin}/>
        <Route path="/BitRupiah" component={BitRupiah}/>
        <Route path="/RupiahBit" component={RupiahBit}/>
      </div>
    );
  }
}

export default App;