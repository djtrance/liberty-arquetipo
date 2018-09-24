import React, { Component } from 'react';

class RegistroCorredor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                codigoCorredor:     '',
                nombreCorredor:     '',
                sucursales:         null,
                ramos:              null,
                convenio:           null,
                poliza:             false,
                endoso:             false,
            }
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

        console.log(name + ': ' + value);

        this.setState({
            [name]: value
        });
    }

    obtenerProductosDelRamo = (indexRamo) => {
        this.updateState('productos', this.ramos[indexRamo].productos);
    }

    seleccionarProductosDelRamo = (e, indexRamo) => {
        var main = this;
        this.handleChange(e);
        this.state.productos.forEach(
            (producto, index) => {
                console.log(index + ' >> ' + main.state['ramo_' + indexRamo]);
                this.state['producto_' + index] = main.state['ramo_' + indexRamo];
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
            <div className="selectable-item" onClick={() => this.obtenerProductosDelRamo(index)}>
                <div key={ramo.codigo} className="form-check" >
                    <input className="form-check-input" name={'ramo_' + index } type="checkbox" 
                    onChange={(e) => this.seleccionarProductosDelRamo(e,index)}/>
                    <span className="form-check-label">
                        { ramo.nombre }
                    </span>
                </div>
            </div>
        );
    }

    obtenerItemsProductos = () => {
        return this.state.productos.map(
            (producto, index) =>
            <div className="selectable-item">
                <div key={producto.codigo} className="form-check">
                    <input className="form-check-input" name={'producto_' + index } type="checkbox" onChange={this.handleChange}/>
                    <span className="form-check-label">
                        { producto.nombre }
                    </span>
                </div>
            </div>
        );
    }

    updateState (attrName, attrValue) {
        if (attrName && attrValue) {
            this.state[attrName] = attrValue;
        }
        this.setState(this.state);
    }

    registrarCorredor () {
        console.log('STATE > ' + this.state);
    }

    render() {

        console.log('render...');

        // TODO: Eliminar el style= del h2
        return (
            <div className="container">
                <h2 style={{textAlign: 'center'}}>Registrar Corredor</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Código</label>
                        <input className="form-control" name="codigoCorredor" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input className="form-control" name="nombreCorredor" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Sucursal</label>
                        <select className="form-control" name="sucursal">
                            <option value="-1"></option>
                            { this.obtenerOpcionesSucursales() }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ramo y Producto</label>
                        <div className="row-ovh">
                            <div className="col-left col-50">
                                <span>Ramo</span>
                                <div className="caja-seleccion mr-10px">
                                    { this.obtenerItemsRamos() }
                                </div>
                            </div>
                            <div className="col-left col-50">
                                <span className="ml-10px">Producto</span>
                                <div className="caja-seleccion ml-10px">
                                    { this.obtenerItemsProductos() }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Convenio</label>
                        <select className="form-control" name="convenio" value={this.state.convenio}>
                            <option value="-1"></option>
                            { this.obtenerOpcionesConvenios() }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tipo de Documento</label>
                        <div className="form-row">
                            <div className="col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" name="poliza" type="checkbox" onChange={this.handleChange}/>
                                    <label className="form-check-label" htmlFor="poliza">
                                        Póliza
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" name="endoso" type="checkbox" onChange={this.handleChange}/>
                                    <label className="form-check-label" htmlFor="endoso">
                                        Endoso
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <button className="btn btn-primary btn-ajustable"
                                    onClick={() => this.registrarCorredor()}>Guardar</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary btn-ajustable">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegistroCorredor;