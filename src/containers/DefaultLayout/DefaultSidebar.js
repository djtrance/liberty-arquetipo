import React, { Component }         from 'react';
import { Collapse, Button, Well }   from 'react-bootstrap';
import { FontAwesomeIcon }          from '@fortawesome/react-fontawesome';
import CONSTANTS                    from '../../constants/constants';

class DefaultSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option:         null,
            suboption:      null,
            showOpcMant:    false
        }
    }

    setOption(option){
        this.setState({
            option:         option,
            showOpcMant:    this.opcionMantenedor(option) ? !this.state.showOpcMant : false
        });
    }

    setSubOption(suboption){
        this.setState({
            suboption:      suboption
        });
    }

    opcionMantenedor (option) {
        return option === CONSTANTS.MENU_OPCIONES.MANTENEDOR ? true : false;
    }

    getOptionClass(option){
        var className = 'nav-item pointer';
        if (this.opcionMantenedor(option) && !this.state.showOpcMant) {
            return className;
        }
        return option === this.state.option ? className + ' selected-menu-option' : className;
    }

    getSubOptionClass(suboption){
        return suboption === this.state.suboption ? 'nav-item selected-menu-suboption' : 'nav-item';
    }

    render() {
    return (
        <div className="sidebar">
            <div className="sidebar-nav ps scrollbar-container ps--active-y">
                <ul className="nav">
                    <li className={this.getOptionClass(CONSTANTS.MENU_OPCIONES.ARCHIVOS)}
                        onClick={() => this.setOption(CONSTANTS.MENU_OPCIONES.ARCHIVOS)}>
                        <a className="nav-link" href="#/ArchivoDigital">
                            <FontAwesomeIcon icon="file"/>
                            <span class="ml-10px">Archivos Digitales</span>
                        </a>
                    </li>
                    <li onClick={() => this.setOption(CONSTANTS.MENU_OPCIONES.MANTENEDOR)}
                        className={this.getOptionClass(CONSTANTS.MENU_OPCIONES.MANTENEDOR)}>
                        <a className="nav-link" href={null}>
                        <FontAwesomeIcon icon="cog" /><span class="ml-10px">Mantenedor</span>
                        </a>
                    </li>
                    {
                        this.state.showOpcMant ?
                            <div>
                                <li onClick={() => this.setSubOption(
                                        CONSTANTS.MENU_OPCIONES.CONSULTA_CORREDOR
                                    )}
                                    className={this.getSubOptionClass(CONSTANTS.MENU_OPCIONES.CONSULTA_CORREDOR)}>
                                    <a className="nav-link" href="#/Mantenedor">
                                        <FontAwesomeIcon className="ml-15px" icon="search" />
                                        <span class="ml-10px">Consulta Corredor</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setSubOption(
                                        CONSTANTS.MENU_OPCIONES.REGISTRO_CORREDOR
                                    )}
                                    className={this.getSubOptionClass(CONSTANTS.MENU_OPCIONES.REGISTRO_CORREDOR)}>
                                    <a className="nav-link" href="#/mantenedor/registro">
                                        <FontAwesomeIcon className="ml-15px" icon="plus" />
                                        <span class="ml-10px">Registro Corredor</span>
                                    </a>
                                </li>
                            </div>
                        : null 
                    }
                </ul>
            </div>
        </div>
    );
  }
}

export default DefaultSidebar;