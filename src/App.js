import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './containers/Posts';
import styled from 'styled-components';
import PostForm from './containers/PostForm';
import './App.css';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Liberty template</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <h2>Create post: </h2>
          <PostForm />
          <h1>React blog</h1>
          <h2>Posts: </h2>
          <Posts />
        </Container>
      </div>

    );
  }
}

export default App;
