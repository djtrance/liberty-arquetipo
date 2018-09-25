import React, { Component } from 'react';

class ListadoCorredor extends Component {
    constructor(props) {

        super(props);

        this.state = {

        };

    }

    handleChange = (e) => {
        const target    = e.target;
        const value     = target.type === 'checkbox' ? target.checked : target.value;
        const name      = target.name;

        this.setState({
            [name]: value
        });
    }    

    render() {
        return (
            <div className="container">
                <h2 style={{textAlign: 'center'}}>Consulta Corredor</h2>
                AQUI EL LISTADO DE CORREDORES
                <a className="nav-link" href="#/corredor/registro">
                    <i className="nav-icon icon-pencil"></i>Registrar Corredor
                </a>
            </div>
        );
    }
}
export default ListadoCorredor;