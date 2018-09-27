import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import { getDataDb } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bootstrap from 'react-bootstrap';
import { 
  Popover, 
  PopoverHeader, 
  PopoverBody,
  Button
} from 'reactstrap';
//hoja de estilo

import './../styles/style1.css'
import 'bootstrap/dist/css/bootstrap.css';

import PropTypes from 'prop-types';
// Custom Formatter component
require('bootstrap/dist/css/bootstrap.css');
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

class estadoFormater extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }
  static propTypes = {
    value: PropTypes.string.isRequired
  };


  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }
  render() {
    const value = this.props.value;
    const id = this.props.dependentValues.id; 
    if (value === "Activo") {
      this.estatus = "success";
      
    }
    else {
      this.estatus = "danger";
    }
    this.className="label label-"+this.estatus;
    return (
      <div>
        <Button size="sm" className={this.className} color={this.estatus} id={'Popover-' + id} onClick={this.toggle}>
        {value}
        </Button>
        <Popover  isOpen={this.state.popoverOpen} target={'Popover-' + id} toggle={this.toggle}>
          <PopoverHeader>Cambiar Estado</PopoverHeader>
          <PopoverBody>En la pantalla actual puede cambiar el estado.<br/>
            Estado actual: <p color={this.estatus}>{value}</p>
          <input type='radio' data-toggle="toggle" data-on="Enabled" data-off="Disabled"/>
          <input type='radio' id={"toggle-two"}/>
          <input type="checkbox" checked data-toggle="toggle"/>

          </PopoverBody>
        </Popover>
      </div>
    );
  };
}
class linkFormater extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  render() {
    const valorEntrada = this.props.value;


    if (valorEntrada === "Ver") {
      this.link = '#';
      console.log("valor -> " + this.props);
      console.log(this.props);
    }
    else {
      this.icono = '#';
    }

    return (
    <div>
      <a href="#">{valorEntrada}</a>
    </div>
    );
  }
}


const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')
class DataGrid extends Component {
  constructor(props, context) {
    super(props, context);
    this.paginaNumber = 0;
    this.maxrecordByPage = 20;
    this.filterState = false;

    this._columns = [
      {
        key: 'corredor',
        name: 'Corredor',
        width: 80
      },
      {
        key: 'convenio',
        name: 'Convenio',
        filterable: true,
        sortable: true
      },
      {
        key: 'ramo',
        name: 'Ramo',
        filterable: true,
        sortable: true
      },
      {
        key: 'producto',
        name: 'Producto',
        filterable: true,
        sortable: true
      },
      {
        key: 'tipoDoc',
        name: 'Tipo de Documento',
        filterable: true,
        sortable: true
      },
      {
        key: 'contrato',
        name: 'Contrato',
        filterable: true,
        sortable: true,
        formatter: iconDocFormater,
        getRowMetaData: (row) => row
      },
      {
        key: 'estado',
        name: 'Estado',
        filterable: true,
        sortable: true,
        formatter: estadoFormater,
        getRowMetaData: (row) => row
      },
      {
        key: 'historial',
        name: 'Historial',
        filterable: true,
        sortable: true,
        formatter: linkFormater,
        getRowMetaData: (row) => row
      }
    ];

    this.state = { rows: this.getDatos(), filters: {}, sortColumn: null, sortDirection: null, selectedRows: [] };
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  getDatos = () => {
    let rows = [];
    getDataDb('all')
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

  refresh = () => {
    this.setState({ DropdownButton: true });
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
            <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
            <li class="page-item"><a class="page-link" href="#"><FontAwesomeIcon icon="download" /></a></li>


          </ul>
        </div>
      </div>
    );

  }
}
export default DataGrid;