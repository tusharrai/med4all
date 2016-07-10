import React from 'react';
import { ListGroup, Alert, Row, Col } from 'react-bootstrap';
import { MedicineListItem } from './medicine-list-item.js';

export const MedicinesList = ({ medicines }) => (
  medicines.length > 0 ? <Row>
  <Col xs={ 12 } sm={ 8 } md={ 6 } mdOffset= { 3 }>
    <ListGroup className="medicines-list">
      {medicines.map((doc) => (
      <MedicineListItem key={ doc._id } medicine={ doc } />
      ))}
    </ListGroup>
    </Col>
  </Row> :
  <Alert bsStyle="warning">No medicines yet.</Alert>
);

MedicinesList.propTypes = {
  medicines: React.PropTypes.array,
};