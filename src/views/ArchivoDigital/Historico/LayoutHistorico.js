import React, { Component }         from 'react';
import { Redirect, Route, Switch }  from 'react-router-dom';
import { Container }                from 'reactstrap';
import FilterHistorico              from './FilterHistorico';
import DataGridHistorico            from './DataGridHistorico';
import DataGridFilterHistorico      from './DataGridFilterHistorico';
import '../../../styles/style1.css';

class LayoutHistorico extends Component {

  constructor (props) {
    super(props)
  }

    render() {
        return (
            <div className="app">
                <FilterHistorico/>
                <DataGridFilterHistorico/>
                <DataGridHistorico/>
            </div>
    );
  }
}

export default LayoutHistorico;