import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import Filter from './Components/Filter';
import Listings from './Components/Listings';
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
        <section id='content-area'>
          <Filter />
          <Listings />
        </section>
      </div>
    );
  }
}

export default App;
