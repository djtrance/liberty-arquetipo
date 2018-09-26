import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    Button,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Collapse,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from 'reactstrap';

class FilterHistorico extends Component {
  constructor(props) {
    super(props);

    this.toggle     = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state      = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
        <div className="animated fadeIn">
            <br/>
            <Row>
                <Col xs="12" md="12">
                    <h4 className="border-bottom">Histórica de Pólizas y Endosos </h4>
                </Col>
                <Col xs="12" md="12">
                    <Card>
                        <CardHeader>
                            <FontAwesomeIcon icon="filter"/>&nbsp;
                            <strong>Filtros de búsquedas</strong>
                            <div className="card-header-actions">
                                <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                                    <FontAwesomeIcon icon= { this.state.collapse ? 'angle-up' : 'angle-down'} />
                                </Button>
                            </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse}>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <FormGroup row>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="s_tipo_movimiento">Tipo de Movimiento</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="select" name="s_tipo_movimiento" id="s_tipo_movimiento">
                                                <option value="0">Seleccione...</option>
                                                <option value="1">Póliza</option>
                                                <option value="2">Endoso</option>
                                                <option value="3">Ambos</option>
                                            </Input>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_poliza">Póliza</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="text" id="i_poliza" name="i_poliza"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_endoso">Endoso</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="text" id="i_endoso" name="i_endoso"/>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_propuesta">Propuesta</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="text" id="i_propuesta" name="i_propuesta"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_ciclo">Ciclo</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="text" id="i_ciclo" name="i_ciclo"/>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_ramo">Ramo</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="select" name="i_ramo" id="i_ramo">
                                                <option value="0">Seleccione...</option>
                                                <option value="1">Ramo #1</option>
                                                <option value="2">Ramo #2</option>
                                                <option value="3">Ramo #3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_contratante">Contratante</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="text" id="i_contratante" name="i_contratante"/>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_sucursal">Sucursal</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="select" name="i_sucursal" id="i_sucursal">
                                                <option value="0">Seleccione...</option>
                                                <option value="1">Sucursal #1</option>
                                                <option value="2">Sucursal #2</option>
                                                <option value="3">Sucursal #3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_fecha_desde">Fecha Emisión Desde</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                        <Input type="date" id="i_fecha_desde" name="i_fecha_desde"/>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Label htmlFor="i_fecha_hasta">Fecha Emisión Hasta</Label>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input type="date" id="i_fecha_hasta" name="i_fecha_hasta"/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <FormGroup row>
                                    <Col xs="6" md="6" className="text-right">
                                        <Button type="reset" size="md" color="secondary">
                                            <FontAwesomeIcon icon="eraser"/>&nbsp;
                                            Limpiar
                                        </Button>
                                    </Col>
                                    <Col xs="6" md="6">
                                        <Button type="submit" size="md" color="primary">
                                            <FontAwesomeIcon icon="search"/>&nbsp;
                                            Buscar
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </CardFooter>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default FilterHistorico;