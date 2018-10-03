import React, { Component } from 'react';
import ReactDataGrid        from 'react-data-grid';
import { getDataDb }        from '../../../services/api';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import PropTypes            from 'prop-types';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from 'reactstrap';
import '../../../styles/style1.css';

class DataGridDisponible extends Component {
  constructor(props) {
    super(props);

    this.state      = {
      fadeIn: true,
      timeout: 300
    };
  }

  selectAll() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <FontAwesomeIcon icon="list"/>
                <div className="card-header-actions">
                  <Button block color="link"
                          className="text-left m-0 p-0"
                          onClick={this.toggle}
                          style={{ marginBottom: '1rem' }}>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th className="checkbox">&nbsp;
                        <Input className="form-check-input" type="checkbox" id="allCheckbox" name="allCheckbox" value="option1" />
                      </th>
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
                      <td>
                        <Input className="form-check-input allCheckbox" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                      </td>
                      <td>Póliza</td>
                      <td>20302438</td>
                      <td>25386</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-check-input allCheckbox" type="checkbox" id="checkbox2" name="checkbox2" value="option1" />
                      </td>
                      <td>Endoso</td>
                      <td>20302438</td>
                      <td>23526</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-check-input allCheckbox" type="checkbox" id="checkbox3" name="checkbox3" value="option1" />
                      </td>
                      <td>Póliza</td>
                      <td>20302438</td>
                      <td>24567</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>
                          <Input className="form-check-input allCheckbox" type="checkbox" id="checkbox4" name="checkbox4" value="option1" />
                      </td>
                      <td>Endoso</td>
                      <td>20302438</td>
                      <td>22970</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                    <tr>
                      <td>
                        <Input className="form-check-input allCheckbox" type="checkbox" id="checkbox5" name="checkbox5" value="option1" />
                      </td>
                      <td>Póliza</td>
                      <td>20302438</td>
                      <td>21008</td>
                      <td>1</td>
                      <td>RUT / Nombre / Razón Social</td>
                      <td>06 - Vehículos</td>
                      <td>Cod. / Nombre</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="12">
            <Button color="primary">
              <FontAwesomeIcon icon="download"/>&nbsp;Descargar
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DataGridDisponible;