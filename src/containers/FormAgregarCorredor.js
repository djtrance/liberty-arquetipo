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
            codigoCorredor: '',
            nombreCorredor: '',
            ramos:          null,
            convenio:       null,
            body: '',
        }
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
        const { title, body } = this.state;
        return (
            <div class="container">
                
                <Form onSubmit={this.handleSubmit}>
                    <h2 class="tituloForm">Agregar Corredor</h2>
                    <div class="col-25">Código Corredor:</div>
                    <div class="col-75">
                        <Input
                            name="codigoCorredor"
                            onChange={this.handleChange}
                            placeholder=""
                            value={this.state.codigoCorredor}
                        />
                    </div>
                    <div class="col-25">Nombre Corredor:</div>
                    <div class="col-75">
                        <Input
                            name="nombreCorredor"
                            onChange={this.handleChange}
                            placeholder=""
                            value={this.state.nombreCorredor}
                        />
                    </div>
                    <div class="col-25"><label for="">Sucursal</label></div>
                    <div class="col-75">
                        <select id="country" name="country" value={this.state.convenio}>
                            <option value="mostrarConvenios">Mostrar Convenios</option>
                        </select>
                    </div>
                    <div class="col-25"><label for="ramoProducto">Ramo y Producto:</label></div>
                    <div class="col-75">
                        <Input
                            name="ramoProducto"
                            onChange={this.handleChange}
                            placeholder=""
                            value={this.state.ramos}
                        />
                    </div>

                    <div class="col-25"><label for="">Ramo y Producto</label></div>
                    <div class="col-75">
                        <select id="country" name="country">
                            <option value="mostrarRamosProductos">Mostrar Ramos y productos</option>
                        </select>
                    </div>

                    <div class="col-25"><label for="">Convenio</label></div>
                    <div class="col-75">
                        <select id="country" name="country" value={this.state.convenio}>
                            <option value="mostrarConvenios">Mostrar Convenios</option>
                        </select>
                    </div>
                    <div class="col-25"><label for="">Todas las Sucursales</label></div>
                    <div class="col-75-mid">
                        X
                    </div>
                    <div class="class-25">Test</div>
                    <div class="class-75">|-|</div>

                    <div class="col-25"><label for="">Tipo de Documento</label></div>

                        <div class="col-25">
                            <label>Póliza</label>
                        </div>
                        <div class="col-25">
                            <label>X</label>
                        </div>
                        <div class="col-25">
                            <label>Endoso</label>
                        </div>
                        <div class="col-25">
                            <label>X</label>
                        </div>


                    <div class="col-25"></div>
                    <div class="col-75">
                    <TextArea
                        name="body"
                        onChange={this.handleChange}
                        placeholder="body"
                        value={body}
                    />
                    </div>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}
export default FormAgregarCorredor;