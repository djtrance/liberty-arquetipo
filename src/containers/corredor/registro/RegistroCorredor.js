import React, { Component } from 'react';

class RegistroCorredor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigoCorredor:     '',
            nombreCorredor:     '',
            sucursales:         null,
            ramos:              null,
            convenio:           null,
            checkPoliza:        false,
            checkEndoso:        false
        };

        this.productosSeleccionados = [];

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
            },
            {
                codigo: 'R004',
                nombre: 'Garantía y Crédito',
                seleccionado:   false,
                productos: [
                    {
                        codigo: 'P001',
                        nombre: 'Garantía',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Fidelidad',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Seguro Extensión y Garantía',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Seguro de Crédito por Ventas a Plazo',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P002',
                        nombre: 'Seguro de Crédito a la Exportación',
                        seleccionado:   false
                    }
                ]
            },
            {
                codigo: 'R005',
                nombre: ' Otros Seguros',
                seleccionado:   false,
                productos: [
                    {
                        codigo: 'P001',
                        nombre: 'Seguro Cesantía',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P001',
                        nombre: 'Seguro de Título',
                        seleccionado:   false
                    },
                    {
                        codigo: 'P001',
                        nombre: 'Seguro Agrícola',
                        seleccionado:   false
                    }
                ]
            }
        ];

        this.state.productos = [];
    }

    /**
     * Manejador por defecto del evento change de un componente
     * @param e Evento Change
     */
    handleChange = (e) => {
        const target    = e.target;
        const value     = target.type === 'checkbox' ? target.checked : target.value;
        const name      = target.name;
        this.setState({
            [name]: value
        });
    }

    /**
     * Agrega o elimina un producto del listado de productos seleccionados
     * @param agregar true si la acción a ejecutar es agregar, false en caso contrario
     * @param index Posición del producto en el arreglo de productos
     */
    agregarEliminarProducto = (agregar, index) => {
        
        var productoAgregar = this.state.productos[index];

        if (agregar) {
            this.productosSeleccionados.push(productoAgregar);
        } else {
            var comp = this;
            this.productosSeleccionados.forEach(function(producto, i){
                if (producto.codigo === productoAgregar.codigo) {
                    comp.productosSeleccionados.splice(i,1);
                }
            });
        }

        this.state['producto_' + this.obtenerCodigoProductoCompuesto(productoAgregar)] = agregar;
        this.updateState();
    }

    /**
     * Actualiza en el state, el atributo productos con los productos pertenecientes al ramo seleccionado
     * @param indexRamo Posicion del ramo en el arreglo
     */
    obtenerProductosDelRamo = (indexRamo) => {
        this.ramoActivoIndex    = indexRamo;
        this.ramoActivoCodigo   = this.ramos[indexRamo].codigo;
        this.updateState('productos', this.ramos[indexRamo].productos);
    }

    /**
     * Selecciona o deselecciona todos los productos del ramo indicado
     * @param seleccionar True si la acción a ejecutar es seleccionar los productos del ramo, false en caso contrario
     * @param indexRamo Posicion del ramo en el arreglo
     */
    selDeselProductosDelRamo = (seleccionar, indexRamo) => {
        var main = this;

        this.state.productos.forEach(
            (producto, index) => {
                this.state['producto_' + this.obtenerCodigoProductoCompuesto(producto)] = seleccionar;
                this.agregarEliminarProducto(seleccionar, index);
            }
        );
        this.updateState();
    }

    /**
     * Devuelve los elementos option correspondientes a las sucursales dispobibles
     */
    obtenerOpcionesSucursales = () => {
        return this.sucursales.map(
            (sucursal, index) => <option key={'sucursal_' + index} value={sucursal.codigo}>{sucursal.nombre}</option>
        );
    }

    /**
     * Devuelve los elementos option correspondientes a los convenios dispobibles
     */
    obtenerOpcionesConvenios = () => {
        return this.convenios.map(
            (convenio, index) => <option key={'convenio_' + index} value={convenio.codigo}>{convenio.nombre}</option>
        );
    }

    /**
     * Devuelve los elementos HTML seleccionables correspondientes a los ramos disponibles
     */
    obtenerItemsRamos = () => {
        return this.ramos.map(
            (ramo, index) =>
            <div    key={'ramo_' + index } 
                    className={ this.ramoActivoIndex === index ? 'selectable-item selectable-item-active' : 'selectable-item'} 
                    onClick={() => this.obtenerProductosDelRamo(index)}>
                <div className="form-check" >
                    <input className="form-check-input" name={'ramo_' + ramo.codigo } type="checkbox" 
                    onChange={(e) => this.selDeselProductosDelRamo(e.target.checked,index)}/>
                    <span className="form-check-label">
                        { ramo.nombre }
                    </span>
                </div>
            </div>
        );
    }

    /**
     * Devuelve los elementos HTML seleccionables correspondientes a los productos disponibles
     */
    obtenerItemsProductos = () => {
        return this.state.productos.map(
            (producto, index) =>
            <div key={'producto_' + index } className="selectable-item">
                <div className="form-check">
                    <input  className="form-check-input"
                            name={'producto_' + this.obtenerCodigoProductoCompuesto(producto) }
                            type="checkbox" onChange={(e) => this.agregarEliminarProducto(e.target.checked,index)}
                            checked={this.state['producto_' + this.obtenerCodigoProductoCompuesto(producto)]}/>
                    <span className="form-check-label">
                        { producto.nombre }
                    </span>
                </div>
            </div>
        );
    }

    obtenerCodigoProductoCompuesto (producto){
        return this.ramoActivoCodigo + '-' + producto.codigo 
    }

    /**
     * Actualiza un atributo del state e invoca el setState
     * @param {*} attrName Nombre del atributo a actualizar
     * @param {*} attrValue Valor del atributo
     */
    updateState (attrName, attrValue) {
        if (attrName && attrValue) {
            this.state[attrName] = attrValue;
        }
        this.setState(this.state);
    }

    /**
     * Registra la información ingresada
    */
    registrarCorredor () {
        console.log('* Registrar Corredor *');
        console.log(this.state);
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
                        <input className="form-control" name="codigoCorredor" 
                            value={this.state.codigoCorredor} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input className="form-control" name="nombreCorredor" 
                            value={this.state.nombreCorredor} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Sucursal</label>
                        <select className="form-control" name="sucursal" value={this.state.sucursales} onChange={this.handleChange}>
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
                        <select className="form-control" name="convenio" value={this.state.convenio} onChange={this.handleChange}>
                            <option value="-1"></option>
                            { this.obtenerOpcionesConvenios() }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tipo de Documento</label>
                        <div className="form-row">
                            <div className="col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" name="checkPoliza" type="checkbox" 
                                    value={this.state.checkPoliza} onChange={this.handleChange}/>
                                    <label className="form-check-label" htmlFor="poliza">
                                        Póliza
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-check">
                                    <input className="form-check-input" name="checkEndoso" type="checkbox" 
                                    value={this.state.checkEndoso} onChange={this.handleChange}/>
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