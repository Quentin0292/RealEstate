import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import './sass/App.scss';

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
        <Header />
      </div>
    );
  }
}

export default App;
