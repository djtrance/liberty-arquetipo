import React, { Component } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import { postPost } from '../services/api';

class FormAgregarCorredor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigoCorredor:     '',
            nombreCorredor:     '',
            sucursales:         null,
            ramos:              null,
            convenio:           null,
            poliza:             false,
            endoso:             false,
            fechaActivacion:    null,
            body: '',
        };

        this.sucursales = [
            { codigo: '001', nombre: 'Santiago Centro'},
            { codigo: '002', nombre: 'Providencia'},
            { codigo: '003', nombre: 'Vitacura'},
            { codigo: '004', nombre: 'La Florida'}
        ];

        this.convenios = [
            { codigo: '001', nombre: 'Convenio 1'},
            { codigo: '002', nombre: 'Convenio 2'},
            { codigo: '003', nombre: 'Convenio 3'}
        ];

        this.ramos = [
            {
                codigo: 'R001',
                nombre: 'Daños a los Bienes',
                seleccionado:   false,
                productos: [
                    {
                        codigo: 'P001',
                        nombre: 'Incendio',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Robo',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P003',
                        nombre: 'Terrorismo',
                        seleccionado:   false
                    }
                ]
            },
            {
                codigo: 'R002',
                nombre: 'Responsabilidad Civil',
                seleccionado:   false,
                productos: [
                    {
                        codigo: 'P001',
                        nombre: 'Responsabilidad Civil Hogar y Condominios',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Responsabilidad Civil Profesional',
                        seleccionado:   false
                    }
                ]
            },
            {
                codigo: 'R003',
                nombre: 'Salud y Accidentes Personales',
                seleccionado:   false,
                productos: [
                    {
                        codigo: 'P001',
                        nombre: 'Salud',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Accidentes Personales',
                        seleccionado:   false
                    }
                ]
            }
        ];

        this.state.productos = [];
    }

    handleChange = (e) => {
        console.log('handleChange...');
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        postPost(this.state)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    obtenerProductosDelRamo = (indexRamo) => {
        this.updateState('productos', this.ramos[indexRamo].productos);
    }

    seleccionarProductosDelRamo = (e, indexRamo) => {
        this.handleChange(e);
        this.state.productos.forEach(
            (producto) => {
                producto.seleccionado = this.ramos[indexRamo].seleccionado;
            }
        );
        this.updateState();
    }

    obtenerOpcionesSucursales = () => {
        return this.sucursales.map(
            (sucursal) => <option key={sucursal.codigo}>{sucursal.nombre}</option>
        );
    }

    obtenerOpcionesConvenios = () => {
        return this.convenios.map(
            (convenio) => <option key={convenio.codigo}>{convenio.nombre}</option>
        );
    }

    obtenerItemsRamos = () => {
        return this.ramos.map(
            (ramo, index) =>
            <div    key={ramo.codigo} 
                    className="selectable-item"
                    onClick={() => this.obtenerProductosDelRamo(index)}>
                <input
                    name="endoso"
                    type="checkbox"
                    value={this.ramos[index].seleccionado}
                    onChange={(e) => this.seleccionarProductosDelRamo(e,index)}/>
                { ramo.nombre }
            </div>
        );
    }

    obtenerItemsProductos = () => {
        return this.state.productos.map(
            (producto, index) =>
            <div    key={producto.codigo} 
                    className="selectable-item">
                <input
                    name="endoso"
                    type="checkbox"
                    value={this.state.productos[index].seleccionado}
                    onChange={this.handleChange}
                    checked={this.state.productos[index].seleccionado}/>
                { producto.nombre }
            </div>
        );
    }

    updateState (attrName, attrValue) {
        if (attrName && attrValue) {
            this.state[attrName] = attrValue;
        }
        this.setState(this.state);
    }

    render() {

        console.log('render...');

        // TODO: Eliminar el style= del h2
        return (
            <div className="container">
                <h2 style={{textAlign: 'center'}}>Agregar Corredor</h2>
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col col-25"><label>Código</label></div>
                        <div className="col col-75">
                            <Input
                                name="codigoCorredor"
                                onChange={this.handleChange}
                                placeholder=""
                                value={this.state.codigoCorredor} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-25"><label>Nombre</label></div>
                        <div className="col col-75">
                            <Input
                                name="nombreCorredor"
                                onChange={this.handleChange}
                                placeholder=""
                                value={this.state.nombreCorredor} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-25"><label>Sucursal</label></div>
                        <div className="col col-75">
                            <select name="sucursal" value={this.state.sucursales}>
                                <option value="-1"></option>
                                { this.obtenerOpcionesSucursales() }
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-25"><label>Ramo y Producto</label></div>
                        <div className="col col-75">
                            <select name="ramo">
                                <option value="mostrarRamosProductos">Mostrar Ramos y productos</option>
                            </select>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col col-25"><label>Tipo de Documento</label></div>
                        <div className="col col-75">
                            <div className="inner-col col-50 caja-seleccion">
                                { this.obtenerItemsRamos() }
                            </div>
                            <div className="inner-col col-50 caja-seleccion">
                                { this.obtenerItemsProductos() }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-25"><label>Convenio</label></div>
                        <div className="col col-75">
                            <select name="convenio" value={this.state.convenio}>
                                <option value="-1"></option>
                                { this.obtenerOpcionesConvenios() }
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-25"><label>Tipo de Documento</label></div>
                        <div className="col col-75">
                            <div className="inner-col col-50">
                                <div className="inner-col col-15">
                                    <input
                                        name="poliza"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        value={this.state.poliza}/>
                                </div>
                                <div className="inner-col col-85">
                                    Póliza
                                </div>
                            </div>
                            <div className="inner-col col-50">
                                <div className="inner-col col-15">
                                    <input
                                        name="endoso"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        value={this.state.endoso}/>
                                </div>
                                <div className="inner-col col-85">
                                    Endoso
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-50">
                            <Button>Guardar</Button>
                        </div>
                        <div className="col col-50">
                            <Button>Cancelar</Button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}
export default FormAgregarCorredor;