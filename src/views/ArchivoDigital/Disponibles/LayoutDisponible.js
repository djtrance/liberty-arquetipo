import React, { Component }         from 'react';
import { Redirect, Route, Switch }  from 'react-router-dom';
import { Container }                from 'reactstrap';
import DataGridDisponible           from './DataGridDisponible';
import DataGridHistorico            from './DataGridHistorico';
import '../../../styles/style1.css';

class LayoutDisponible extends Component {

  constructor (props) {
    super(props)
  }

    render() {
      return (
        <div className="app">
            <DataGridHistorico/>
        </div>
    );
  }
}

export default LayoutDisponible;