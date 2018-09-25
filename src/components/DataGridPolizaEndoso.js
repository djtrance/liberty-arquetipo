import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import { getDataDb } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//hoja de estilo

import './../styles/style1.css'
import PropTypes from 'prop-types';
// Custom Formatter component

class iconDocFormater extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  render() {
    const percentComplete = this.props.value;
    var icono = "";
    if (percentComplete === "pdf") {
      this.icono = 'file-pdf';
    }
    else {
      this.icono = 'square';
    }

    return (
      <div>
        <FontAwesomeIcon icon={this.icono} />

      </div>
    );
  }
}



const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')
class DataGridPolizaEndoso extends Component {
  constructor(props, context) {
    super(props, context);
    this.paginaNumber = 0;
    this.maxrecordByPage = 20;
    this.filterState = false;

    this._columns = [
      {
        key: 'tipoMovimiento',
        name: 'Tipo Movimiento',
        width: 140
      },
      {
        key: 'numeroPoliza',
        name: 'N° Póliza',
        filterable: true,
        sortable: true
      },
      {
        key: 'numeroPropuesta',
        name: 'N° Propuesta',
        filterable: true,
        sortable: true
      },
      {
        key: 'numeroEndoso',
        name: 'N° Endoso',
        filterable: true,
        sortable: true,
        width: 100
      },
      {
        key: 'contratante',
        name: 'Contratante',
        filterable: true,
        sortable: true,
        width: 140
      },
      {
        key: 'ramo',
        name: 'Ramo',
        filterable: true,
        sortable: true
      },
      {
        key: 'convenio',
        name: 'Convenio',
        filterable: true,
        sortable: true
      }
    ];

    this.state = { rows: this.getDatos(), filters: {}, sortColumn: null, sortDirection: null, selectedRows: [] };
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  getDatos = () => {
    let rows = [];
    getDataDb('polizaEndoso')
      .then((res) => {
        this.setState({
          posts: res.data,
          loading: false,
        });
        console.log("respueta servicio");
        console.log(res);
        if (res.data.estatus.codigo === '2') {
          rows = (res.data.respuesta);
          console.log("data ");
          console.log(rows);
          this.setState({ 'rows': rows });
        }

      })
      .catch((err) => console.log(err));
    return rows;
  }

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  onRowSelect = (rows) => {
    this.setState({ selectedRows: rows });
  };

  prev10 = () => {

    if ((this.paginaNumber - 10) < 0) {
      this.paginaNumber = 0;
    }
    else {
      this.paginaNumber = this.paginaNumber - 10;
    }
    console.log(this.state);
    this.setState({});
  }
  next10 = () => {
    this.paginaNumber = this.paginaNumber + 10;
    this.setState({});
  }
  enableFilter = () => {
    this.filterState = !this.filterState;
  }

  render() {
    const rowText = this.state.selectedRows.length === 1 ? 'Fila' : 'Filas';

    return (
      <div>

        <span>{this.state.selectedRows.length} {rowText} seleccionada</span>
        <ReactDataGrid
          scrollToRowIndex={this.paginaNumber}
          onGridSort={this.handleGridSort}
          enableRowSelect="multi"
          enableCellSelect={true}
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.getSize()}
          minHeight={300}
          enableFilter={true}
          toolbar={
            <Toolbar enableFilter={true} filterRowsButtonText="Habilitar Filtros">
            </Toolbar>

          }
          onAddFilter={this.handleFilterChange}
          onRowSelect={this.onRowSelect}
          onClearFilters={this.onClearFilters} />
        <div class="mt-1">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
            <li class="page-item"><a class="page-link" href="#"><FontAwesomeIcon icon="download" /></a></li>
            
            
          </ul>
        </div>
      </div>
    );

  }
}
export default DataGridPolizaEndoso;