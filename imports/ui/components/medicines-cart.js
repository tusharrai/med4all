import React from 'react';
import { Row, Button, ListGroup, Alert } from 'react-bootstrap';
import { MedicineCartItem } from './medicine-cart-item.js';
import { insertDonation } from '../../api/donations/methods.js';
import { updateCart, removeCart } from '../../api/cart/methods.js';

const handleInsertCartToMedicine = (cart, event) => {
  event.preventDefault();
  cart.map((doc) => {
    insertDonation.call({
      userId: Meteor.userId(),
      brand: doc.brand,
      manufacturer: doc.manufacturer,
      category: doc.category,
      quantity: doc.quantity,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Medicines in cart inserted!', 'success');
      }
    });
    removeCart.call({
      _id: doc._id,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Cart removed!', 'success');
      }
    });
  });
};

export const MedicinesCart = ({ cart }) => (
  cart.length > 0 ? <Row>
    <ListGroup className="medicines-cart">
    {cart.map((doc) => (
      <MedicineCartItem key={ doc._id } medicine={ doc } />
    ))}
   </ListGroup>
   <Button
    type="submit" bsStyle="success"
    onClick={ handleInsertCartToMedicine.bind(this, cart) }>
    Submit
   </Button>
  </Row> :
  <Alert bsStyle="warning">Cart is empty!</Alert>

);

MedicinesCart.propTypes = {
  cart: React.PropTypes.array,
};
