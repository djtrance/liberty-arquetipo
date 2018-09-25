import React, { Component }         from 'react';
import ReactDataGrid from '../../components/DataGrid';

//hoja de estilo
import '../../styles/style1.css'




class Mantenedor extends Component {
  render() {
    return (
      <div className="app">
      <h1>Mantenedor</h1>
      <ReactDataGrid/>
      </div>
    );
  }
}

export default Mantenedor;
