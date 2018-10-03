import React, { Component } from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from 'reactstrap';

class DataGridFilterHistorico extends Component {
  constructor(props) {
    super(props);

    this.toggle     = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state      = {
      collapse: false,
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
          <Col>
            <Card>
              <CardHeader>
                <FontAwesomeIcon icon="list"/> Resultados de búsqueda
                <div className="card-header-actions">
                  <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                      <FontAwesomeIcon icon= { this.state.collapse ? 'angle-up' : 'angle-down'} />
                  </Button>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.collapse}>
                <CardBody>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                    <tr>
                      <th>Tipo Movimiento</th>
                      <th>Nro. Póliza</th>
                      <th>Nro. Propuesta</th>
                      <th>Nro. Endoso</th>
                      <th>Contratante</th>
                      <th>Ramo</th>
                      <th>Convenio</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Póliza</td>
                      <td>20302438</td>
                      <td>25386</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>Endoso</td>
                      <td>20302438</td>
                      <td>23526</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>Póliza</td>
                      <td>20302438</td>
                      <td>24567</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>Endoso</td>
                      <td>20302438</td>
                      <td>22970</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    </tbody>
                  </Table>
                  <nav>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink previous tag="button"></PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem>
                        <PaginationLink next tag="button"></PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button"><FontAwesomeIcon icon="download" /></PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DataGridFilterHistorico;