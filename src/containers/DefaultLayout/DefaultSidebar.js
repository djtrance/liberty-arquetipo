import React, { Component }         from 'react';
import { Collapse, Button, Well }   from 'react-bootstrap';
import { FontAwesomeIcon }          from '@fortawesome/react-fontawesome';
import CONSTANTS                    from '../../constants/constants';

class DefaultSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
    return (
        <div className="sidebar">
            <div className="sidebar-nav ps scrollbar-container ps--active-y">
                <ul className="nav">
                    <li className={
                            this.state.current === CONSTANTS.MENU_OPCIONES.ARCHIVOS ? 
                            'nav-item selected-menu-option' 
                            : 'nav-item'
                        }
                        onClick={() => this.setState({ current: CONSTANTS.MENU_OPCIONES.ARCHIVOS })}>
                        <a className="nav-link" href="#/ArchivoDigital">
                            <FontAwesomeIcon icon="file"/><span class="ml-10px">Archivos Digitales</span>
                        </a>
                    </li>
                    <li className="nav-item pointer" 
                        onClick={() => this.setState({ 
                            mantOptions: !this.state.mantOptions,
                            current: CONSTANTS.MENU_OPCIONES.MANTENEDOR
                        })}>
                        <a className="nav-link" href={null}>
                        <FontAwesomeIcon icon="cog" /><span class="ml-10px">Mantenedor</span>
                        </a>
                    </li>
                    {
                        this.state.mantOptions ?
                            <div>
                                <li onClick={() => this.setState({ current: CONSTANTS.MENU_OPCIONES.CONSULTA_CORREDOR })}
                                    className={
                                        this.state.current === CONSTANTS.MENU_OPCIONES.CONSULTA_CORREDOR ? 
                                        'nav-item selected-menu-option' 
                                        : 'nav-item'
                                    }>
                                    <a className="nav-link" href="#/Mantenedor">
                                        <FontAwesomeIcon className="ml-15px" icon="search" /><span class="ml-10px">Consulta Corredor</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setState({ current: CONSTANTS.MENU_OPCIONES.REGISTRO_CORREDOR })}
                                    className={
                                        this.state.current === CONSTANTS.MENU_OPCIONES.REGISTRO_CORREDOR ? 
                                        'nav-item selected-menu-option' 
                                        : 'nav-item'
                                    }>
                                    <a className="nav-link" href="#/mantenedor/registro">
                                        <FontAwesomeIcon className="ml-15px" icon="plus" /><span class="ml-10px">Registro Corredor</span>
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