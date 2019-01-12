import React, { Component } from 'react';
import './App.css';
import Top from './Top';
import Content from './Content';
import Bottom from './Bottom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="boxx2"></div>
        <Top />
        <Content />
        <Bottom />
      </div>
    );
  }
}

export default App;
