import React, { Component }           from 'react';
import { slide as Menu } from 'react-burger-menu';
import RegistroCorredor from '../../corredor/registro/RegistroCorredor';

class Aside extends React.Component {

    constructor (props) {
      super(props)
    }

    render () {
      return (
        <Menu right
            isOpen={ this.props.open }
            onStateChange={() => this.props.handleStateChange()}>
            <RegistroCorredor />
        </Menu>
      )
    }
  }

  export default Aside;