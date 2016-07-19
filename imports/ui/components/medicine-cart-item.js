import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { updateCart, removeCart } from '../../api/cart/methods.js';

export class MedicineCartItem extends React.Component {

componentDidMount() {
  const quantity = this.refs.quantity.value.trim();
}

handleUpdateCart(event) {
  event.preventDefault();
  // const quantity = event.target.value.trim();
  const quantity = this.refs.quantity.value.trim();
  const userId = Meteor.userId();
  if (quantity !== '') {
    updateCart.call({
      _id: this.props.medicine._id,
      update: { quantity },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Cart updated!', 'success');
      }
    });
  }
}

handleRemoveCart(event) {
  event.preventDefault();
  if (confirm('Remove from cart?')) {
    removeCart.call({
      _id: this.props.medicine._id,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Cart removed!', 'success');
      }
    });
  }
}

render() {
  return (
    <Row key={ this.props.medicine._id }>
      <Col xs={ 2 } sm={ 2 }>
        <h4> {this.props.medicine.brand} </h4>
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <h4> {this.props.medicine.manufacturer} </h4>
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <h4> {this.props.medicine.category} </h4>
      </Col>
      <Col xs={ 2 } sm={ 2 }>
        <input
          type="text"
          ref="quantity"
          standalone
          defaultValue={ this.props.medicine.quantity }
        />
      </Col>
      <Col xs={ 2 } sm={ 2 }>
      
        <i class="fa fa-trash"
          
          onClick={ this.handleRemoveCart.bind(this) }>
         </i>
      
        <Button
          type = "submit"
          bsStyle="primary"
          onClick={ this.handleUpdateCart.bind(this) }>
          Update
        </Button>
        
      </Col>
    </Row>
    );
  }
}
MedicineCartItem.propTypes = {
  medicine: React.PropTypes.object,
  
};