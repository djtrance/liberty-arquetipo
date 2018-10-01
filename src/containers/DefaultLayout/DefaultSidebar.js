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
            mantenedorCollapsed:    true,
            firmaDigitalCollapse:   true
        }
    }

    setOption(option){
        this.setState({
            option:         option,
            suboption:      null,
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

    collapseMenu(){
        this.setState({
            archivoCollapsed:       true,
            mantenedorCollapsed:    true,
            firmaDigitalCollapse:   true
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
                            <span class="ml-10px">Archivos Digitales</span>
                        </a>
                        <ul className={ classNames({ 'pointer without-padding': true,
                                        collapse: this.state.archivoCollapsed
                            })}>
                            <li className="nav-item">
                                <a  href="#/ArchivosHistoricos"
                                    className="sub-option">
                                    <FontAwesomeIcon icon="list-ol"/> Disponibles
                                </a>
                            </li>
                            <li className="nav-item">
                                <a  href="#/ArchivosHistoricos"
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