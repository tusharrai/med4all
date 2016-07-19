import React from 'react';
import { ListGroup, Alert, Row, Col } from 'react-bootstrap';
import { DonationListItem } from './donation-list-item.js';

export const DonationsList = ({ donations }) => (
  donations.length > 0 ? <Row>
  
      {donations.map((doc) => (
      <DonationListItem key={ doc._id } donation={ doc } />
      ))}

  </Row> :
  <Alert bsStyle="warning">No donations yet.</Alert>
);

DonationsList.propTypes = {
  donations: React.PropTypes.array,
};
