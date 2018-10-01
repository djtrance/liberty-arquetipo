import React, { Component } from 'react';
import ReactDataGrid from '../../components/DataGrid';
import '../../styles/style1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row
} from 'reactstrap';

class Mantenedor extends Component {
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
      <div className="app animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <FontAwesomeIcon icon="list" /> Consulta Corredor
                <div className="card-header-actions">
                  <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    
                  </Button>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.collapse}>
                <CardBody>
                  <span className="span-ref" style={{ textAlign: 'right' }} onClick={this.props.showAside}><FontAwesomeIcon icon="plus" />  Registrar Corredor</span>
                  <ReactDataGrid />
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Mantenedor;