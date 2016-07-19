import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export const MedicineListItem = ({ medicine }) => (
  <h4 className="page-header" key={ medicine._id }>
    <Link
        to = {`/medicine/${medicine.brand}`}>
        { medicine.brand }
    </Link>
    <small>
    <Link
        className="pull-right"
                to = {`/donate/${medicine.brand}`}>
        Donate
    </Link>
    </small>
  </h4>
);

MedicineListItem.propTypes = {
  medicine: React.PropTypes.object,      //
};
