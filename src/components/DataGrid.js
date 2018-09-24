import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

//hoja de estilo

import './../styles/style1.css'

const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')
class DataGrid extends Component {
    constructor(props, context) {
      super(props, context);
      this.paginaNumber=0;
      this.maxrecordByPage=20;
      this.filterState=false;
      
      this._columns = [
        {
          key: 'id',
          name: 'ID',
          width: 80
        },
        {
          key: 'task',
          name: 'Title',
          filterable: true,
          sortable: true
        },
        {
          key: 'priority',
          name: 'Priority',
          filterable: true,
          sortable: true
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          filterable: true,
          sortable: true
        },
        {
          key: 'complete',
          name: '% Complete',
          filterable: true,
          sortable: true
        },
        {
          key: 'startDate',
          name: 'Start Date',
          filterable: true,
          sortable: true
        },
        {
          key: 'completeDate',
          name: 'Expected Complete',
          filterable: true,
          sortable: true
        }
      ];
      
      this.state = { rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null, selectedRows: [] };
    }
  
    getRandomDate = (start, end) => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    };
  
    createRows = (numberOfRows) => {
      let rows = [];
      for (let i = 1; i < numberOfRows; i++) {
        rows.push({
          id: i,
          task: 'Task ' + i,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
          startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
          completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        });
      }
      return rows;
    };
  
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

    prev10 = ()=>{
      
      if((this.paginaNumber -10)<0){
        this.paginaNumber=0;
      }
      else{
        this.paginaNumber=this.paginaNumber-10;
      }
      this.setState({});
    }
    next10 = ()=>{
      this.paginaNumber=this.paginaNumber+10;
      this.setState({});
    }
    enableFilter = ()=>{
      this.filterState=!this.filterState;
    }
    
    render() {
      const rowText = this.state.selectedRows.length === 1 ? 'Fila' : 'Filas';
        
        return (
   <div><span>{this.state.selectedRows.length} {rowText} seleccionada</span>  
              

        <ReactDataGrid
        scrollToRowIndex={this.paginaNumber}
        onGridSort={this.handleGridSort}
        enableRowSelect="multi"
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={500}
        enableFilter={true}
        toolbar={
                <Toolbar enableFilter={true} filterRowsButtonText="Habilitar Filtros">
                    <button onClick={this.prev10}>Página {this.paginaNumber < 0? this.paginaNumber- 10:0 }</button>
                    <button onClick={this.next10}>Página {this.paginaNumber + 10 }</button>
                </Toolbar>
                }
        onAddFilter={this.handleFilterChange}
        onRowSelect={this.onRowSelect}
        onClearFilters={this.onClearFilters} /> 
    </div>    
    );
        
    }
}
export default DataGrid;