import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DonationsList from '../containers/donations-list.js';


export const Donations = () => (
  <Row>
     <Col xs={ 10 } sm={ 8 } md={ 6 } mdOffset= { 2 }>
     <h3 className="page-header">Your Donations</h3>
      <DonationsList />
    </Col>
  </Row>
);
