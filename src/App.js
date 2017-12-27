import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

const Title = styled.div`
  font-weight: bold;
`;

const ogp_setting = () => {
  const head = document.head.children;
  console.log(head);

  for (let i = 0; i < head.length; i++) {
      let data = head[i].getAttribute('property');
      if (data !== null && data.indexOf('og:title') !== -1) {
        head[i].setAttribute('content', 'change title');
      }
  }
}

class App extends Component {

  componentWillMount() {
    console.log('componentWillMount');
    ogp_setting();
  }

  render() {
    return (
      <Title className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Title>
    );
  }
}

export default App;
