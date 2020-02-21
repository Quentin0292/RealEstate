import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Quentin'
    };
  }
  render() {
    return (
      <div>
        <h1>Real Estate</h1>
      </div>
    );
  }
}

export default App;
