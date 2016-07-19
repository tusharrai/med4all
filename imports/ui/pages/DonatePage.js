import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AddMedicine } from '../components/add-medicine.js';
import { AddMedicineNew } from '../components/add-medicine-new.js';


export class DonatePage extends React.Component {
  renderNavigation(params) {
    return this.props.params.brand ? <AddMedicine 
        brand = {this.props.params.brand}
        manufacturer = {this.props.params.manufacturer}
        category = {this.props.params.category}
        disableInput = {true}
      /> : <AddMedicine 
        brand = {this.props.params.brand}
        manufacturer = {this.props.params.manufacturer}
        category = {this.props.params.category}
        disableInput = {false} />;
  }
  
  render() {
    return <Row>
    <Col xs={ 10 } sm={ 8 } md={ 6 } mdOffset= { 2 }>
    <h3 className="page-header">Donate</h3>
      {this.renderNavigation(this.props.params)}
      </Col>
  	</Row>;
  }
}

DonatePage.propTypes = {
   params: React.PropTypes.object,
};
