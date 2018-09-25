import React, { Component }         from 'react';
import DataGridPolizaEndoso from '../../components/DataGridPolizaEndoso';

//hoja de estilo
import '../../styles/style1.css'




class PolizaEndoso extends Component {
  render() {
    return (
      <div className="app">
      <h1>Póliza y Endoso</h1>
      <DataGridPolizaEndoso/>
      </div>
    );
  }
}

export default PolizaEndoso;
