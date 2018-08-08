import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';

class App extends Component {
  render () {
    return (
      <div className="container fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Content />
        </div>
      </div>
    )
  }
}

export default App;
