import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
//import Toolbar from 'react-data-grid';
//import Data from 'react-data-grid-addons';
import { properties } from '../properties/properties';

class DataGrid extends Component {
    constructor(props, context) {
        super(props, context);
        this.createRows();
    
        
        this._columns = 
        [
          { key: 'id', name: 'ID' },
          { key: 'title', name: 'Title' ,filterable: true, },
          { key: 'count', name: 'Count' } ];
            
        this.state = null;
      }
    
      createRows = () => {
        let rows = [];
        for (let i = 1; i < 1000; i++) {
          rows.push({
            id: i,
            title: 'Title ' + i,
            count: i * 1000
          });
        }
    
        this._rows = rows;
      };
    
      rowGetter = (i) => {
        return this._rows[i];
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
  enableFilter(){
    this.enableFilter=true;
  }
  onClearFilters = () => {
    // all filters removed
    this.setState({filters: {} });
  };
    render() {
  
        
        return (
            
            <ReactDataGrid 
            inicio={this.getInitialState} 
            columns={this._columns}
            rowGetter={this.rowGetter}
            enableCellSelect={true}
            toolbar={<button type="button" onClick="this.enableFilter={true}">Enable Filter </button>}
            onAddFilter={this.handleFilterChange}
            onClearFilters={this.onClearFilters}
            rowsCount={this._rows.length}
            minHeight={500} >
            <h1>{{properties}}</h1>
            </ReactDataGrid>
        );
    }
}
export default DataGrid;