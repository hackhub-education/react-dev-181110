import React, { Component } from 'react';
import Nav from './components/Nav';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Page />
      </div>
    );
  }
}

export default App;
