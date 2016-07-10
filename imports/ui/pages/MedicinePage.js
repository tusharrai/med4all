import React from 'react';
import { Row, Col, Alert, Input, Button } from 'react-bootstrap';
import MedicineDetail from '../containers/medicine.js';

export class MedicinePage extends React.Component {


  render() {
    return <Row>
        <MedicineDetail brand = {this.props.params.brand}/>
        </Row>
  }
}

MedicinePage.propTypes = {
  params: React.PropTypes.object,
};
