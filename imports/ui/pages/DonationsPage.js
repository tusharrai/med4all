import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DonationsList from '../containers/donations-list.js';


export const Donations = () => (
  <Row>
      <Col xs={12}>
      <DonationsList />
      </Col>

  </Row>
);
