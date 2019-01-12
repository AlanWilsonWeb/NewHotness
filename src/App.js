import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="boxx"></div>
        <div id="top"><h1>This is the Header</h1></div>
        <div id="content"><h2>this is the body</h2></div>
        <div id="bottom"><h5 id="footerMark">Nannerfox Productions</h5></div>
      </div>
    );
  }
}

export default App;
