import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MedicinesCart from '../containers/medicines-cart.js';

export const Cart = () => (
  <Row>
    <Col xs= {12}>
    <h3 className="page-header">Cart</h3>
    <MedicinesCart />
    </Col>
  </Row>
);
