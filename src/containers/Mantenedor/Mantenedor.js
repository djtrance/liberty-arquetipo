import React, { Component }         from 'react';
import ReactDataGrid from '../../components/DataGrid';

//hoja de estilo
import '../../styles/style1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Mantenedor extends Component {
  render() {
    return (
      <div className="app">
        <h4 className="module-title">Consulta Corredor</h4>
        <span className="span-ref" style={{textAlign: 'right'}} onClick={this.props.showAside}><FontAwesomeIcon icon="plus" />  Registrar Corredor</span>
        <ReactDataGrid/>
      </div>
    );
  }
}

export default Mantenedor;
