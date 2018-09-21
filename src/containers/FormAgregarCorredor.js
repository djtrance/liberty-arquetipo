import React, { Component } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
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
    }
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        postPost(this.state)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
    render() {

        let sucursalesOptions = this.sucursales.map((sucursal) =>
            <option key={sucursal.codigo}>{sucursal.nombre}</option>
        );

        let conveniosOptions = this.convenios.map((convenio) =>
            <option key={convenio.codigo}>{convenio.nombre}</option>
        );

        return (
            <div class="container">
                <h2 class="tituloForm">Agregar Corredor</h2>
                <Form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="col col-25"><label>Código</label></div>
                        <div class="col col-75">
                            <Input
                                name="codigoCorredor"
                                onChange={this.handleChange}
                                placeholder=""
                                value={this.state.codigoCorredor} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-25"><label>Nombre</label></div>
                        <div class="col col-75">
                            <Input
                                name="nombreCorredor"
                                onChange={this.handleChange}
                                placeholder=""
                                value={this.state.nombreCorredor} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-25"><label>Sucursal</label></div>
                        <div class="col col-75">
                            <select name="sucursal" value={this.state.sucursales}>
                                <option value={null}></option>
                                { sucursalesOptions }
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-25"><label>Ramo y Producto</label></div>
                        <div class="col col-75">
                            <select name="ramo">
                                <option value="mostrarRamosProductos">Mostrar Ramos y productos</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-25"><label>Convenio</label></div>
                        <div class="col col-75">
                            <select name="convenio" value={this.state.convenio}>
                                <option value={null}></option>
                                { conveniosOptions }
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-25"><label>Tipo de Documento</label></div>
                        <div class="col col-75">
                            <div class="inner-col col-50">
                                <div class="inner-col col-15">
                                    <input
                                        name="poliza"
                                        type="checkbox"
                                        checked={this.state.poliza}/>
                                </div>
                                <div class="inner-col col-85">
                                    Póliza
                                </div>
                            </div>
                            <div class="inner-col col-50">
                                <div class="inner-col col-15">
                                    <input
                                        name="endoso"
                                        type="checkbox"
                                        checked={this.state.endoso}/>
                                </div>
                                <div class="inner-col col-85">
                                    Endoso
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-50">
                            <Button>Guardar</Button>
                        </div>
                        <div class="col col-50">
                            <Button>Cancelar</Button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}
export default FormAgregarCorredor;