import React from 'react';
import { ListGroup, Alert, Row, Col } from 'react-bootstrap';
import { MedicineListItem } from './medicine-list-item.js';

export const MedicinesList = ({ medicines }) => (
  medicines.length > 0 ? <Row>
      {medicines.map((doc) => (
      <MedicineListItem key={ doc._id } medicine={ doc } />
      ))}
  </Row> :
  <Alert bsStyle="warning">No medicines</Alert>
);

MedicinesList.propTypes = {
  medicines: React.PropTypes.array,
};
