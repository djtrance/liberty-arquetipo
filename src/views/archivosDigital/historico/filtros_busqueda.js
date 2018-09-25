import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class filtros_busqueda extends Component {
  constructor(props) {
    super(props);

    this.toggle     = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
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
            <Row>
                <Col xs="12" md="12">
                    <Card>
                        <CardHeader>
                            <strong>BFiltros de búsqueda</strong>
                        </CardHeader>
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
                                </FormGroup>
                                <FormGroup row>
                                    <Col xs="12" md="2">
                                        <Label htmlFor="i_poliza">Póliza</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                        <Input type="text" id="i_poliza" name="i_poliza"/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default filtros_busqueda;