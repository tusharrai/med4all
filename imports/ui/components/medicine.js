import React from 'react';
import { Row, Col, ListGroupItem, Input, Button, Well } from 'react-bootstrap';
import { Link } from 'react-router';

export const MedicineDetail = ({ medicine }) => (
  <Row>
    <Col xs={ 10 } sm={ 8 } md={ 6 } mdOffset= { 2 }>
    <h3 className="page-header">
    { medicine.brand } 
    <small>
      <Link
        className="pull-right"
                to = {`/donate/${medicine.brand}/${medicine.manufacturer}/${medicine.category}`}>
        Donate 
    </Link>
    </small>
    </h3>
    <Well>
    <p>Manufacturer: {medicine.manufacturer}</p>
    <p>Category: {medicine.category}</p>
    <p>Package Price: {medicine.package_price}</p>
    <p>Package Quantity: {medicine.package_qty}</p>
    <p>Package Type: {medicine.package_type}</p>
    <p>Unit Price: {medicine.unit_price}</p>
    <p>Unit Quantity: {medicine.unit_qty}</p> 
    <p>Constituents: </p>
    {medicine.constituents.map((doc) => (
      <ul key={doc.name}>
          <li> Name: {doc.name} </li>
          <li> Quantity: {doc.qty} </li>
          <li> Strength: {doc.strength} </li>
      </ul>
    ))}
    </Well>
    <p> </p>
    <h4>Alternatives: </h4>
    
    {medicine.alternatives.map((doc) => (
      <Well key={doc.brand}>
          <h4><Link
                 to = {`/medicine/${doc.brand}`}>
            { doc.brand }
          </Link> <small> Manufactured by </small> {doc.manufacturer} </h4>
          <p>{doc.category} </p>
      </Well>
    ))}
    </Col>
  </Row>
);

MedicineDetail.propTypes = {
  medicine: React.PropTypes.object,
};
