import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export const DonationListItem = ({ donation }) => (
  <h4 className="page-header" key={ donation._id }>
    { donation.brand }
    <small>
    <Link
        className="pull-right"
                to = {`/donate/${donation.brand}/${donation.manufacturer}/${donation.category}`}>
        Donate More
    </Link>
    </small>
  </h4>
);
