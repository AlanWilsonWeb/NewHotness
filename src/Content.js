import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
        <div>
            <div className="content"><h2>this is the body</h2></div>
            <div className="content"><h2>This is another section</h2></div>
            <div className="content"><h2>Three</h2></div>
            <div className="content"><h2>Four</h2></div>
            <div className="content"><h2>Five</h2></div>
        </div>
    );
  }
}

export default Content;
