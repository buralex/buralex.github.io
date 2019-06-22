import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';


import {
  starting, flipCard, flipText, navHide, remNav, gallery, visit,
} from './functions';


import View from './View';

class App extends Component {

  componentDidMount() {
    starting();
      flipCard(".card", "flipped");
      flipText(".quote", ".face", "turned", "again");
      navHide(".navbar", "nav-up");
      remNav("#myNavbar li", "#myNavbar", "in", ".navbar", "nav-up");
      gallery('.frame > a');
      visit('.visit');
  }

  render() {
    return (
      <div className="App">
          <View />
      </div>
    );
  }
}

export default App;
