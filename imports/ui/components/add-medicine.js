import React from 'react';
import { Input, Form, Row, Col, Button } from 'react-bootstrap';
import { insertCart } from '../../api/cart/methods.js';
import { Link } from 'react-router';

export class AddMedicine extends React.Component {

  handleInsertCart(event) {
      event.preventDefault();
      const target = event.target;
      const userId = Meteor.userId();
      const brand = target.brand.value.trim();
      const manufacturer = target.manufacturer.value.trim();
      const category = target.category.value.trim();
      const quantity = target.quantity.value.trim();


      if (brand !== '') {
        insertCart.call({
          userId, brand, manufacturer, category, quantity,
        }, (error) => {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            target.value = '';
            Bert.alert('Medicine added to cart!', 'success');
          }
        });
      }

      target.quantity.value = "";
  }

  render() {
    return (
      <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <h4 className="page-header">Add Medicine</h4>
          <form ref="add-medicine" className="add-medicine" onSubmit={ this.handleInsertCart }>
            <Input
              type="text"
              label="Medicine brand"
              ref="brand"
              name="brand"
              placeholder="Medicine Brand"
              defaultValue={this.props.brand}
            />
            <Input
              type="text"
              label="Manufacturer"
              ref="manufacturer"
              name="manufacturer"
              placeholder="Medicine Manufacturer e.g. Ranbaxy, Cipla .."
              defaultValue={this.props.manufacturer}             
            />
            <Input
              type="text"
              label="Type"
              ref="category"
              name="category"
              placeholder="e.g. Tablet, syrup .."
              defaultValue={this.props.category}           
            />
             <Input
              type="text"
              label="Quantity"
              ref="quantity"
              name="quantity"
              placeholder="Quantity.."
            />
            <Button
              type="submit"
              bsStyle="success">
              Add to cart
            </Button>

            <Link
              className="pull-right"
              to="/cart">
              View Cart
            </Link>

          </form>
        </Col>
      </Row>
    );
  }
}
AddMedicine.propTypes = {
  brand: React.PropTypes.string,
  manufacturer: React.PropTypes.string,
  category: React.PropTypes.string
};