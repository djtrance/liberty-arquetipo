import React, { Component }         from 'react';
import { Collapse, Button, Well }   from 'react-bootstrap';
import { FontAwesomeIcon }          from '@fortawesome/react-fontawesome';
import CONSTANTS                    from '../../constants/constants';
import classNames                   from 'classnames';

class DefaultSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option:                 null,
            suboption:              null,
            showOpcMant:            false,
            archivoCollapsed:       true,
            mantenedorCollapsed:    true
        }
    }

    collapseMenu(){
        this.setState({
            archivoCollapsed:       true,
            mantenedorCollapsed:    true
        });
    }

    render() {
    return (
        <div className="sidebar">
            <div className="sidebar-nav ps scrollbar-container ps--active-y">
                <ul className="nav">
                    
                    <li id="liArchivoDigital" className={classNames({ 'active selected-menu-suboption': !this.state.archivoCollapsed })}>
                        <a  href="#/ArchivoDigital"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                this.collapseMenu();
                                this.setState({ archivoCollapsed: !this.state.archivoCollapsed });
                                return false;
                            }} >
                            <FontAwesomeIcon icon="briefcase"/>
                            <span class="ml-10px">Archivo Digital</span>
                        </a>
                        <ul className={ classNames({ 'pointer without-padding': true,
                                        collapse: this.state.archivoCollapsed
                            })}>
                            <li className="nav-item">
                                <a  href="#/ArchivoDigital/Nuevos"
                                    className="sub-option">
                                    <FontAwesomeIcon icon="list-ol"/> Nuevos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a  href="#/ArchivoDigital/Historicos"
                                    className="sub-option">
                                    <FontAwesomeIcon icon="history"/> Históricos
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li id="liMantenedor" className={classNames({ 'active selected-menu-suboption': !this.state.mantenedorCollapsed })}>
                        <a  href=""
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                this.collapseMenu();
                                this.setState({ mantenedorCollapsed:    !this.state.mantenedorCollapsed });
                                return false;
                            }} >
                            <FontAwesomeIcon icon="cog"/>
                            <span class="ml-10px">Mantenedor</span>
                        </a>
                        <ul className={ classNames({ 'pointer without-padding': true,
                                        collapse: this.state.mantenedorCollapsed
                            })}>
                            <li className="nav-item">
                                <a  href="#/Mantenedor"
                                    className="sub-option">
                                    <FontAwesomeIcon icon="search"/> Consulta Corredor
                                </a>
                            </li>
                            <li className="nav-item">
                                <a  href="#/mantenedor/registro"
                                    className="sub-option">
                                    <FontAwesomeIcon icon="plus-circle"/> Nuevo Corredor
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default DefaultSidebar;