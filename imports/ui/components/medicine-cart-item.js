import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { updateCart, removeCart } from '../../api/cart/methods.js';

const handleUpdateCart = (medicineId, event) => {
  const brand = event.target.value.trim();
  if (brand !== '' && event.keyCode === 13) {
    updateCart.call({
      _id: medicineId,
      update: { uid, brand, manufacturer, category, quantity },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Cart updated!', 'success');
      }
    });
  }
};

const handleRemoveCart = (medicineId, event) => {
  event.preventDefault();
  if (confirm('Remove from cart?')) {
    removeCart.call({
      _id: medicineId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Cart removed!', 'success');
      }
    });
  }
};

export const MedicineCartItem = ({ medicine }) => (
  <Row>
  <ListGroupItem key={ medicine._id }>
    <Row>
      <Col xs={ 2 } sm={ 2 }>
        <Input
          type="text"
          standalone
          defaultValue={ medicine.brand }
        />
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <Input
          type="text"
          standalone
          defaultValue={ medicine.manufacturer }
        />
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <Input
          type="text"
          standalone
          defaultValue={ medicine.category }
        />
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <Input
          type="text"
          standalone
          defaultValue={ medicine.quantity }
        />
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveCart.bind(this, medicine._id) }>
          Remove
        </Button>
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <Button
          bsStyle="primary"
          className="btn-block"
          onClick={ handleUpdateCart.bind(this, medicine._id) }>
          Update
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
</Row>
);
