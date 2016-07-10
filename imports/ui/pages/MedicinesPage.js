import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MedicinesList from '../containers/medicines-list.js';
import { AddMedicine } from '../components/add-medicine.js';


export const Medicines = () => (
  <Row>
      <Col xs={12}>
      <MedicinesList />
      </Col>
  </Row>
);
