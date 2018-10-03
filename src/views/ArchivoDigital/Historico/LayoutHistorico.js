import React, { Component }         from 'react';
import { Redirect, Route, Switch }  from 'react-router-dom';
import { Container }                from 'reactstrap';
import FilterHistorico              from './FilterHistorico';
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
        </div>
    );
  }
}

export default LayoutHistorico;