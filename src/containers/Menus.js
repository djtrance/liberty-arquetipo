import React, { Component } from 'react';
import Menu from '../components/Menu'; 
class Menus extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

    }

    render() {
        return (
            <div>

                <a onClick={this.showMenu}>Mantenedor de Impresiones Digitales</a>
                    


                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <Menu>
                                <div class="dropdown-content">
                                 <li> <a href="#Agregar">Agregar Corredor</a></li>  
                                 <li> <a href="#Buscar-Activar-Desactivar">Buscar / Activar / Desactivar Corredor</a></li>
                                </div>
                                </Menu>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>

        );
    }
}
export default Menus;