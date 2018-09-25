import React, { Component }         from 'react';
import DataGridPolizaEnsoso from '../../components/DataGridPolizaEnsoso';

//hoja de estilo
import '../../styles/style1.css'




class PolizaEndoso extends Component {
  render() {
    return (
      <div className="app">
      <h1>Póliza y Endoso</h1>
      <DataGridPolizaEnsoso/>
      </div>
    );
  }
}

export default PolizaEndoso;
