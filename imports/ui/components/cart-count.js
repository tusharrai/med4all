import React from 'react';
import { Badge } from 'react-bootstrap';

export const CartCount = ({ cartCount }) => (
  <Badge> {cartCount} </Badge>

);

CartCount.propTypes = {
  cartCount: React.PropTypes.number,
};
