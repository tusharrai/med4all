import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export const MedicineDetail = ({ medicine }) => (
  <Row>
    <Col xs={ 12 } sm={ 8 } md={ 6 } mdOffset= { 2 }>
    <h4 className="page-header">
    { medicine.brand } 
      <Link
        className="pull-right"
                to = {`/donate/${medicine.brand}/${medicine.manufacturer}/${medicine.category}`}>
        Donate
    </Link>
    </h4>
    <p>Manufacturer: {medicine.manufacturer}</p>
    <p>Category: {medicine.category}</p>
    <p>Package Price: {medicine.package_price}</p>
    <p>Package Quantity: {medicine.package_qty}</p>
    <p>Package Type: {medicine.package_type}</p>
    <p>Unit Price: {medicine.unit_price}</p>
    <p>Unit Quantity: {medicine.unit_qty}</p> 
    </Col>
  </Row>
);

MedicineDetail.propTypes = {
  medicine: React.PropTypes.object,
};
