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
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
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