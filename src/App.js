import React, { Component } from 'react';
import Posts from './containers/Posts';
import styled from 'styled-components';
import PostForm from './containers/PostForm';
import FormAgregarCorredor from './containers/FormAgregarCorredor';
import Menus from './containers/Menus';
import DataGrid from './containers/DataGrid';
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

          <img src="https://www.liberty.cl/imagenes/logo.png" className="Liberty-logo" alt="logo" />
          <h1 className="App-title">Liberty APP</h1>


          
        </header>
        <div class="menu">
          <ul class="contMenuPrincipal">
            <li class="liMenuPrincipal"><a href="#home" class="active">Home</a></li>
            <li class="liMenuPrincipal"><a href="#news">News</a></li>
            <li class="liMenuPrincipal"><a href="#contact">Contact</a></li>
            <li class="liMenuPrincipal"><Menus></Menus></li>
            <li class="liMenuPrincipal"><a href="#about">About</a></li>
            <li class="liMenuPrincipal"><a href="#about">Menu Multi APP</a></li>
            <li class="liMenuPrincipal"><Menus></Menus></li>
          </ul>
        </div>


        <p className="App-intro">
          Applicaciones:
        </p>
        <FormAgregarCorredor></FormAgregarCorredor>
        <Container>
        
          <h1>Listado de Mensajes</h1>
          <h2>Mensajes:</h2>
          <Posts />
          <PostForm />
        </Container>
        <DataGrid/>
      </div>

    );
  }
}

export default App;
