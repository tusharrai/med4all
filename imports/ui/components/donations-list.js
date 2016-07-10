import React from 'react';
import { ListGroup, Alert, Row, Col } from 'react-bootstrap';
import { DonationListItem } from './donation-list-item.js';

export const DonationsList = ({ donations }) => (
  donations.length > 0 ? <Row>
  <Col xs={ 12 } sm={ 8 } md={ 6 } mdOffset= { 3 }>
      {donations.map((doc) => (
      <DonationListItem key={ doc._id } donation={ doc } />
      ))}

    </Col>
  </Row> :
  <Alert bsStyle="warning">No donations yet.</Alert>
);

DonationsList.propTypes = {
  donations: React.PropTypes.array,
};
